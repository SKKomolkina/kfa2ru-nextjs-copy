import cls from './XtremeTunerPage.module.scss'

import {Header} from './Header'
import {Connect} from './Connect'
import {ClickOc} from "./ClickOc"
import {Handle} from './Handle'
import {Light} from './Light'
import {Sync} from "./Sync"
import {Fans} from './Fans'
import {Monitoring} from './Monitoring'
import {Download} from './Download'
import {Video} from './Video'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

export const XtremeTunerPage = ({scrollRef, scroll}: any) => {

    return (
        <div className={cls.main}>
            <Header/>
            <Connect/>
            <ClickOc/>
            <Handle/>
            <Light/>
            <Sync scrollRef={scrollRef}/>
            <Video/>
            <Fans/>
            <Monitoring/>
            <Download scroll={scroll} scrollRef={scrollRef}/>

            <HomeAbout blackText={true} boxClassName={cls.box}/>
        </div>
    );
};
