# Gera src/data/pecas.ts a partir de scripts/catalogo.py.
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from catalogo import PECAS
from catalogo import slug

# A letra da referência diz a cor do ouro: N rosé, S amarelo, BR branco, SNB três cores.
def cor(ref):
    m = re.match(r'^[A-Za-z]+-([A-Za-z]+)', ref)
    k = (m.group(1) if m else '').upper()
    if k.startswith('SNB'): return 'tres-cores'
    if k.startswith('BR'): return 'branco'
    if k.startswith('S'): return 'amarelo'
    if k.startswith('N'): return 'rose'
    return None

VIDEOS = {'medicina-zirconia-esmeralda-an-n0171': 'anel-medicina', 'cavalheiro-an-n082-c': 'fabrico'}
linhas = []
for i, (fonte, cat, nome, ref, preco, peso, medida, par) in enumerate(PECAS):
    s = slug(nome, ref)
    p = {'slug': s, 'ref': re.sub(r'-[A-Z]$', '', ref), 'nome': nome, 'categoria': cat, 'preco': preco}
    if peso is not None: p['peso'] = peso
    if medida: p['medida'] = medida
    if par: p['par'] = True
    c = cor(ref)
    if c: p['cor'] = c
    if s in VIDEOS: p['video'] = VIDEOS[s]
    p['ordem'] = i
    linhas.append('  ' + json.dumps(p, ensure_ascii=False) + ',')

ts = '''// Gerado por scripts/gerar-dados.py a partir de scripts/catalogo.py. Não editar à mão.
// Dados transcritos das etiquetas das publicações da loja no Instagram (2026-10-17).
import type { Peca } from './tipos'

export const PECAS: Peca[] = [
''' + '\n'.join(linhas) + '\n]\n'
open('src/data/pecas.ts', 'w').write(ts)
print(len(linhas), 'peças')
