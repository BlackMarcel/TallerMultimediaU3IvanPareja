
const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');
menuBtn&&menuBtn.addEventListener('click',()=>{nav.style.display=(nav.style.display==='block')?'':'block';});
const narr=document.getElementById('narr');if(narr){const btn=document.getElementById('btnNarr');btn&&btn.addEventListener('click',()=>{narr.paused?narr.play():narr.pause();});}
const simBtn=document.getElementById('simularBtn');if(simBtn){simBtn.addEventListener('click',()=>{
  const v=(document.querySelector('input[name="estrategia"]:checked')||{}).value;
  const out=document.getElementById('salida');out.textContent={
    flanqueo:'El flanqueo desorganiza la línea enemiga y reduce bajas.',
    frontal:'El avance frontal enfrenta mayor resistencia y más bajas.',
    defensiva:'Se mantiene la posición pero con menor impulso ofensivo.'
  }[v]||'Selecciona una estrategia para simular.';
});}
document.addEventListener('click',e=>{const t=e.target;if(t&&t.matches('[data-info]'))alert(t.getAttribute('data-info'));});
