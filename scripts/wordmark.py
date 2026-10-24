import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
f=TTFont(sys.argv[1]); gs=f.getGlyphSet(); cmap=f.getBestCmap(); hmtx=f['hmtx']
upm=f['head'].unitsPerEm
text=sys.argv[2]; track=-0.012*upm
x=0; pen=SVGPathPen(gs); bp=BoundsPen(gs)
for ch in text:
    g=cmap[ord(ch)]
    t=(1,0,0,-1,x,0)
    gs[g].draw(TransformPen(pen,t)); gs[g].draw(TransformPen(bp,t))
    x+=hmtx[g][0]+track
os2=f['OS/2']
print('upm',upm,'bounds',bp.bounds,'xHeight',os2.sxHeight,'cap',os2.sCapHeight,'baseline 0')
open(sys.argv[3],'w').write(pen.getCommands())
