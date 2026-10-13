from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json, textwrap

root=Path(__file__).resolve().parents[2]
manifest=json.loads((Path(__file__).parent/'manifest.json').read_text())
out=root/'public/images/thumbnails/generated'; out.mkdir(parents=True,exist_ok=True)
font_path='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
small_path='/System/Library/Fonts/Supplemental/Arial.ttf'
font=ImageFont.truetype(font_path,50); small=ImageFont.truetype(small_path,23); kicker=ImageFont.truetype(font_path,22)
items=[('BLOG',x) for x in manifest['blog']]+[('RESEARCH',x) for x in manifest['research']]
for n,(kind,item) in enumerate(items):
    bg=(12+3*(n%4),30+4*(n%5),52+5*(n%3))
    im=Image.new('RGB',(1200,630),bg); d=ImageDraw.Draw(im)
    accent=(56+(n*23)%120,189-(n*11)%70,168+(n*7)%70)
    d.rounded_rectangle((62,58,1138,572),radius=30,fill=(18,42,69),outline=accent,width=4)
    d.rectangle((62,58,86,572),fill=accent)
    d.text((132,112),f'OVERSEAS VIRTUAL ASSISTANT  /  {kind}',font=kicker,fill=accent)
    words=item['title'].split(); lines=[]; line=''
    for word in words:
        candidate=(line+' '+word).strip()
        if d.textlength(candidate,font=font)>890 and line: lines.append(line); line=word
        else: line=candidate
    lines.append(line)
    y=190
    for line in lines:
        d.text((132,y),line,font=font,fill=(245,248,252)); y+=67
    d.line((132,500,1050,500),fill=(70,105,135),width=2)
    d.text((132,523),'CONTROLLED WORKFLOWS  •  TRACEABLE EVIDENCE  •  OCT 13, 2026',font=small,fill=(194,210,224))
    exif=Image.Exif();exif[270]=item['title']
    im.save(out/f"{item['slug']}.webp",'WEBP',quality=86,method=6,exif=exif)
