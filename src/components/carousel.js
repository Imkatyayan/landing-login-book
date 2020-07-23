import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './carousel.scss'
import { TweenMax, TimelineLite, Power3, Power2, SlowMo} from 'gSap';
import img from'./wave-small.png';

export default function SimpleSlide() {
    let app= React.useRef(null);
    let images=React.useRef(null);
    let content = React.useRef(null);
    let overlay=React.useRef(null)
    let tl= new TimelineLite({delay:.8});
    React.useEffect(()=>{
        const fImage=images.firstElementChild;
        const sImage = images.childNodes[1];
        const tImage = images.childNodes[2]

        const headline1= content.childNodes[0].childNodes[0];
        const headline2 = content.childNodes[0].childNodes[1];
        const headline3 = content.childNodes[0].childNodes[2];

        TweenMax.to(app,0,{css:{visibility:"visible"}})
        tl.fromTo(overlay, 1.2, { x: 0 }, { x: 1560, ease: Power2.easeOut },'Start')
            .from(fImage, 1.2, { y: 1280, ease: Power3.easeOut }, 1)
          .from(fImage.firstElementChild,2,{scale:1.6,ease:Power3.easeOut},1.2)
            .from(sImage, 1.2, { y: 1280, ease: Power3.easeOut },1.2)
            .from(sImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 1.2)
            .from(tImage, 1.2, { y: 1280, ease: Power3.easeOut }, 1.4)
            .from(tImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 1.4)

            tl.staggerFrom([headline1.children,headline2.children,headline3.children],1,{
                y:40,
                ease: Power3.easeOut,
            },0.15,'Start')
    })
    useStyles(s)
    return (
        <div className={s.hero} ref={(el)=>{app=el;}}>
            <div className={s.overlay} ref={(el) => { overlay = el; }}></div>
            <div className={s.container}>
                <div className={s.heroInner}>
                    <div className={s.heroContent}>
                        <div className={s.heroContentInner} ref={(el) => { content = el; }}>
                            <h1>
                                <div className={s.heroContentLine}>
                                    <div className={s.heroContentLineInner}>Brush Up Your Knowledge</div>
                                </div>
                                <div className={s.heroContentLine}>
                                    <div className={s.heroContentLineInner}>Sales upto 70%</div>
                                </div>
                                <div className={s.heroContentLine}>
                                    <div className={s.heroContentLineInner}>Agriculture/Home Science/Economics</div>
                                </div>
                            </h1>
                        </div>
                    </div>
                            <div className={s.heroImages}>
                        <div className={s.heroImagesInner} ref={(el) => { images = el; }}>
                                    <div className={s.firstImage}>
                                        <img src="http://agrobiosonline.com/books_coverpages/06260908_685.jpg"/>
                                    </div>
                                    <div className={s.secondImage}>
                                        <img src="http://agrobiosonline.com/books_coverpages/06260908_685.jpg" />
                                    </div>
                            <div className={s.thirdImage}>
                                        <img src="http://agrobiosonline.com/books_coverpages/06260908_685.jpg" />
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
}
