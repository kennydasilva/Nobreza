# Passa os recortes (melhorados pelo Real-ESRGAN quando existirem) para fotos/, em JPEG de alta qualidade.
# Uso: python3 -I scripts/exportar-fotos.py <recortes> <recortes-x4 ou ->  <destino: fotos/pecas>
import os, sys
from PIL import Image, ImageFilter

src, x4, dst = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(dst, exist_ok=True)
MAX = 1600
for f in sorted(os.listdir(src)):
    if not f.endswith('.png'): continue
    nome = f[:-4]
    melhor = os.path.join(x4, f) if x4 != '-' else ''
    if melhor and os.path.exists(melhor):
        I = Image.open(melhor).convert('RGB')
        I.thumbnail((MAX, MAX), Image.LANCZOS)
    else:
        I = Image.open(os.path.join(src, f)).convert('RGB')
        I = I.filter(ImageFilter.UnsharpMask(radius=1.2, percent=40, threshold=2))
    I.save(os.path.join(dst, nome + '.jpg'), 'JPEG', quality=90, optimize=True, progressive=True)
print('ok', dst)
