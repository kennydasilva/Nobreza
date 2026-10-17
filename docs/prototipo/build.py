import base64,re,urllib.parse
s=open('template.html').read()
WA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9.2 8.6c.2-.4.5-.4.8-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.5.9 1.2 1.6 2.1 2.1l.6-.5c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3 0 .6-.4.8-.5.3-1.2.5-2 .2-2.1-.7-3.7-2.3-4.4-4.4-.3-.8-.1-1.5.2-2.2z" fill="currentColor" stroke="none"/></svg>'
SETA='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>'
s=s.replace('{{svg-wa}}',WA).replace('{{svg-seta}}',SETA)
def wa(msg): return 'https://wa.me/258862070869?text='+urllib.parse.quote(msg)
s=re.sub(r'\{\{wa:([^}]*)\}\}',lambda m: wa(m.group(1)),s)
def peca(m):
    img,nome,det,ref,preco,par=m.group(1).split('|')
    msg=f'Olá Nobreza, quero pedir: {nome} (ref. {ref}), {preco} MZN{" o par" if par else ""}.'
    small=f'<small>{par.upper()}</small>' if par else ''
    return f'''<article class="peca">
          <a class="img" href="#aliancas" aria-label="{nome}"><img src="{{{{{img}}}}}" width="560" height="560" alt="{nome}" loading="lazy"></a>
          <h3><a href="#aliancas">{nome}</a></h3>
          <span class="detalhe">{det}</span>
          <div class="linha"><span class="etiqueta"><strong>{preco} MZN</strong>{small}</span><a class="pedir" href="{wa(msg)}" target="_blank" rel="noopener" aria-label="Pedir {nome} pelo WhatsApp">{WA}Pedir</a></div>
        </article>'''
s=re.sub(r'\{\{peca:([^}]*)\}\}',peca,s)
logo='/home/kenny/Development/Frontend/Project/react/Nobreza/identidadevisual/369543046_1936883356681898_8039652608799551590_n.jpg'
def uri(p,m): return f'data:{m};base64,'+base64.b64encode(open(p,'rb').read()).decode()
s=s.replace('{{logo}}',uri(logo,'image/jpeg')).replace('{{fabrico}}',uri('fabrico.mp4','video/mp4'))
for n in set(re.findall(r'\{\{([\w-]+)\}\}',s)): s=s.replace('{{'+n+'}}',uri(n+'.webp','image/webp'))
assert '{{' not in s
open('../prop/direcao-visual-nobreza.html','w').write(s); print(len(s)//1024,'KB')
open('preview.html','w').write('<!doctype html><html lang="pt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>'+s+'</body></html>')
