# Recorta as fotografias das publicações (sem a faixa de preço nem o logótipo de canto).
# Uso: python3 -I scripts/fotos.py <pasta imagens> <saída>
import os, sys
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from catalogo import PECAS, slug

IMG = ('.jpg', '.jpeg', '.png', '.webp')
listar = lambda p: sorted(f for f in os.listdir(p) if os.path.isfile(os.path.join(p, f)))

def recorte(src, pasta, idx):
    if pasta == 'raiz':
        f = [x for x in listar(src) if not x.lower().endswith('.mp4')][idx]
        I = Image.open(os.path.join(src, f)).convert('RGB')
        topo, fim = int(I.height * 0.13), int(I.height * 0.80)
    else:
        f = listar(os.path.join(src, pasta))[idx]
        I = Image.open(os.path.join(src, pasta, f)).convert('RGB')
        topo, fim = int(I.height * 0.265), int(I.height * 0.665)
    lado = fim - topo
    x = (I.width - lado) // 2
    return I.crop((x, topo, x + lado, fim))

if __name__ == '__main__':
    src, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    for (pasta, idx), cat, nome, ref, *_ in PECAS:
        recorte(src, pasta, idx).save(os.path.join(out, slug(nome, ref) + '.png'))
    print(len(PECAS), 'recortes em', out)
