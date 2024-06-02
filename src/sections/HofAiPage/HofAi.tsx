import clspage from './HofAi.module.scss'

import {Title} from './Title'
import {Subtitle} from './Subtitle'
import {Speed} from './Speed'
import {Scanner} from './Scanner'
import {Fans} from './Fans'
import {Light} from './Light'
import {Panel} from './Panel'
import {Photo} from './Photo'
import {Video} from './Video'

import textStyles from "@/sections/XtremeTunerPage/XtremeTunerPage.module.scss";
import cls from '@/sections/XtremeTunerPage/Download.module.scss'
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";

export const HofAiPage = ({scrollRef}: any) => {
    return (
        <div className={clspage.page}>
            <Title/>
            <Subtitle/>
            <Speed/>
            <Scanner/>
            <Fans/>
            <Light/>
            <Panel/>
            <Photo/>
            <Video/>

            <section ref={scrollRef} className={cls.section}>
                <svg className={cls.qr} width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="72.5" height="72.4184" rx="1.75" stroke="#1B1B1B" stroke-width="0.5"/>
                    <path d="M6.67969 6.66797H9.06574V9.03469H6.67969V6.66797ZM9.06574 6.66797H11.4518V9.03469H9.06574V6.66797ZM11.4518 6.66797H13.8379V9.03469H11.4518V6.66797ZM13.8379 6.66797H16.2239V9.03469H13.8379V6.66797ZM16.2239 6.66797H18.61V9.03469H16.2239V6.66797ZM18.61 6.66797H20.996V9.03469H18.61V6.66797ZM20.996 6.66797H23.3821V9.03469H20.996V6.66797ZM25.7681 6.66797H28.1542V9.03469H25.7681V6.66797ZM30.5403 6.66797H32.9263V9.03469H30.5403V6.66797ZM35.3124 6.66797H37.6984V9.03469H35.3124V6.66797ZM37.6984 6.66797H40.0845V9.03469H37.6984V6.66797ZM44.8566 6.66797H47.2427V9.03469H44.8566V6.66797ZM49.6287 6.66797H52.0148V9.03469H49.6287V6.66797ZM52.0148 6.66797H54.4008V9.03469H52.0148V6.66797ZM54.4008 6.66797H56.7869V9.03469H54.4008V6.66797ZM56.7869 6.66797H59.1729V9.03469H56.7869V6.66797ZM59.1729 6.66797H61.559V9.03469H59.1729V6.66797ZM61.559 6.66797H63.9451V9.03469H61.559V6.66797ZM63.9451 6.66797H66.3311V9.03469H63.9451V6.66797ZM6.67969 9.03469H9.06574V11.4014H6.67969V9.03469ZM20.996 9.03469H23.3821V11.4014H20.996V9.03469ZM28.1542 9.03469H30.5403V11.4014H28.1542V9.03469ZM30.5403 9.03469H32.9263V11.4014H30.5403V9.03469ZM32.9263 9.03469H35.3124V11.4014H32.9263V9.03469ZM35.3124 9.03469H37.6984V11.4014H35.3124V9.03469ZM37.6984 9.03469H40.0845V11.4014H37.6984V9.03469ZM49.6287 9.03469H52.0148V11.4014H49.6287V9.03469ZM63.9451 9.03469H66.3311V11.4014H63.9451V9.03469ZM6.67969 11.4014H9.06574V13.7681H6.67969V11.4014ZM11.4518 11.4014H13.8379V13.7681H11.4518V11.4014ZM13.8379 11.4014H16.2239V13.7681H13.8379V11.4014ZM16.2239 11.4014H18.61V13.7681H16.2239V11.4014ZM20.996 11.4014H23.3821V13.7681H20.996V11.4014ZM25.7681 11.4014H28.1542V13.7681H25.7681V11.4014ZM28.1542 11.4014H30.5403V13.7681H28.1542V11.4014ZM30.5403 11.4014H32.9263V13.7681H30.5403V11.4014ZM37.6984 11.4014H40.0845V13.7681H37.6984V11.4014ZM40.0845 11.4014H42.4705V13.7681H40.0845V11.4014ZM49.6287 11.4014H52.0148V13.7681H49.6287V11.4014ZM54.4008 11.4014H56.7869V13.7681H54.4008V11.4014ZM56.7869 11.4014H59.1729V13.7681H56.7869V11.4014ZM59.1729 11.4014H61.559V13.7681H59.1729V11.4014ZM63.9451 11.4014H66.3311V13.7681H63.9451V11.4014ZM6.67969 13.7681H9.06574V16.1349H6.67969V13.7681ZM11.4518 13.7681H13.8379V16.1349H11.4518V13.7681ZM13.8379 13.7681H16.2239V16.1349H13.8379V13.7681ZM16.2239 13.7681H18.61V16.1349H16.2239V13.7681ZM20.996 13.7681H23.3821V16.1349H20.996V13.7681ZM25.7681 13.7681H28.1542V16.1349H25.7681V13.7681ZM28.1542 13.7681H30.5403V16.1349H28.1542V13.7681ZM30.5403 13.7681H32.9263V16.1349H30.5403V13.7681ZM35.3124 13.7681H37.6984V16.1349H35.3124V13.7681ZM37.6984 13.7681H40.0845V16.1349H37.6984V13.7681ZM42.4705 13.7681H44.8566V16.1349H42.4705V13.7681ZM44.8566 13.7681H47.2427V16.1349H44.8566V13.7681ZM49.6287 13.7681H52.0148V16.1349H49.6287V13.7681ZM54.4008 13.7681H56.7869V16.1349H54.4008V13.7681ZM56.7869 13.7681H59.1729V16.1349H56.7869V13.7681ZM59.1729 13.7681H61.559V16.1349H59.1729V13.7681ZM63.9451 13.7681H66.3311V16.1349H63.9451V13.7681ZM6.67969 16.1349H9.06574V18.5016H6.67969V16.1349ZM11.4518 16.1349H13.8379V18.5016H11.4518V16.1349ZM13.8379 16.1349H16.2239V18.5016H13.8379V16.1349ZM16.2239 16.1349H18.61V18.5016H16.2239V16.1349ZM20.996 16.1349H23.3821V18.5016H20.996V16.1349ZM25.7681 16.1349H28.1542V18.5016H25.7681V16.1349ZM32.9263 16.1349H35.3124V18.5016H32.9263V16.1349ZM35.3124 16.1349H37.6984V18.5016H35.3124V16.1349ZM37.6984 16.1349H40.0845V18.5016H37.6984V16.1349ZM40.0845 16.1349H42.4705V18.5016H40.0845V16.1349ZM42.4705 16.1349H44.8566V18.5016H42.4705V16.1349ZM44.8566 16.1349H47.2427V18.5016H44.8566V16.1349ZM49.6287 16.1349H52.0148V18.5016H49.6287V16.1349ZM54.4008 16.1349H56.7869V18.5016H54.4008V16.1349ZM56.7869 16.1349H59.1729V18.5016H56.7869V16.1349ZM59.1729 16.1349H61.559V18.5016H59.1729V16.1349ZM63.9451 16.1349H66.3311V18.5016H63.9451V16.1349ZM6.67969 18.5016H9.06574V20.8683H6.67969V18.5016ZM20.996 18.5016H23.3821V20.8683H20.996V18.5016ZM30.5403 18.5016H32.9263V20.8683H30.5403V18.5016ZM32.9263 18.5016H35.3124V20.8683H32.9263V18.5016ZM40.0845 18.5016H42.4705V20.8683H40.0845V18.5016ZM44.8566 18.5016H47.2427V20.8683H44.8566V18.5016ZM49.6287 18.5016H52.0148V20.8683H49.6287V18.5016ZM63.9451 18.5016H66.3311V20.8683H63.9451V18.5016ZM6.67969 20.8683H9.06574V23.235H6.67969V20.8683ZM9.06574 20.8683H11.4518V23.235H9.06574V20.8683ZM11.4518 20.8683H13.8379V23.235H11.4518V20.8683ZM13.8379 20.8683H16.2239V23.235H13.8379V20.8683ZM16.2239 20.8683H18.61V23.235H16.2239V20.8683ZM18.61 20.8683H20.996V23.235H18.61V20.8683ZM20.996 20.8683H23.3821V23.235H20.996V20.8683ZM25.7681 20.8683H28.1542V23.235H25.7681V20.8683ZM30.5403 20.8683H32.9263V23.235H30.5403V20.8683ZM35.3124 20.8683H37.6984V23.235H35.3124V20.8683ZM40.0845 20.8683H42.4705V23.235H40.0845V20.8683ZM44.8566 20.8683H47.2427V23.235H44.8566V20.8683ZM49.6287 20.8683H52.0148V23.235H49.6287V20.8683ZM52.0148 20.8683H54.4008V23.235H52.0148V20.8683ZM54.4008 20.8683H56.7869V23.235H54.4008V20.8683ZM56.7869 20.8683H59.1729V23.235H56.7869V20.8683ZM59.1729 20.8683H61.559V23.235H59.1729V20.8683ZM61.559 20.8683H63.9451V23.235H61.559V20.8683ZM63.9451 20.8683H66.3311V23.235H63.9451V20.8683ZM30.5403 23.235H32.9263V25.6018H30.5403V23.235ZM35.3124 23.235H37.6984V25.6018H35.3124V23.235ZM42.4705 23.235H44.8566V25.6018H42.4705V23.235ZM44.8566 23.235H47.2427V25.6018H44.8566V23.235ZM6.67969 25.6018H9.06574V27.9685H6.67969V25.6018ZM9.06574 25.6018H11.4518V27.9685H9.06574V25.6018ZM11.4518 25.6018H13.8379V27.9685H11.4518V25.6018ZM13.8379 25.6018H16.2239V27.9685H13.8379V25.6018ZM20.996 25.6018H23.3821V27.9685H20.996V25.6018ZM25.7681 25.6018H28.1542V27.9685H25.7681V25.6018ZM30.5403 25.6018H32.9263V27.9685H30.5403V25.6018ZM32.9263 25.6018H35.3124V27.9685H32.9263V25.6018ZM35.3124 25.6018H37.6984V27.9685H35.3124V25.6018ZM40.0845 25.6018H42.4705V27.9685H40.0845V25.6018ZM42.4705 25.6018H44.8566V27.9685H42.4705V25.6018ZM44.8566 25.6018H47.2427V27.9685H44.8566V25.6018ZM47.2427 25.6018H49.6287V27.9685H47.2427V25.6018ZM54.4008 25.6018H56.7869V27.9685H54.4008V25.6018ZM56.7869 25.6018H59.1729V27.9685H56.7869V25.6018ZM59.1729 25.6018H61.559V27.9685H59.1729V25.6018ZM63.9451 25.6018H66.3311V27.9685H63.9451V25.6018ZM9.06574 27.9685H11.4518V30.3352H9.06574V27.9685ZM13.8379 27.9685H16.2239V30.3352H13.8379V27.9685ZM23.3821 27.9685H25.7681V30.3352H23.3821V27.9685ZM25.7681 27.9685H28.1542V30.3352H25.7681V27.9685ZM30.5403 27.9685H32.9263V30.3352H30.5403V27.9685ZM35.3124 27.9685H37.6984V30.3352H35.3124V27.9685ZM52.0148 27.9685H54.4008V30.3352H52.0148V27.9685ZM61.559 27.9685H63.9451V30.3352H61.559V27.9685ZM13.8379 30.3352H16.2239V32.7019H13.8379V30.3352ZM16.2239 30.3352H18.61V32.7019H16.2239V30.3352ZM20.996 30.3352H23.3821V32.7019H20.996V30.3352ZM23.3821 30.3352H25.7681V32.7019H23.3821V30.3352ZM28.1542 30.3352H30.5403V32.7019H28.1542V30.3352ZM30.5403 30.3352H32.9263V32.7019H30.5403V30.3352ZM32.9263 30.3352H35.3124V32.7019H32.9263V30.3352ZM35.3124 30.3352H37.6984V32.7019H35.3124V30.3352ZM44.8566 30.3352H47.2427V32.7019H44.8566V30.3352ZM49.6287 30.3352H52.0148V32.7019H49.6287V30.3352ZM52.0148 30.3352H54.4008V32.7019H52.0148V30.3352ZM9.06574 32.7019H11.4518V35.0687H9.06574V32.7019ZM11.4518 32.7019H13.8379V35.0687H11.4518V32.7019ZM18.61 32.7019H20.996V35.0687H18.61V32.7019ZM23.3821 32.7019H25.7681V35.0687H23.3821V32.7019ZM25.7681 32.7019H28.1542V35.0687H25.7681V32.7019ZM28.1542 32.7019H30.5403V35.0687H28.1542V32.7019ZM30.5403 32.7019H32.9263V35.0687H30.5403V32.7019ZM37.6984 32.7019H40.0845V35.0687H37.6984V32.7019ZM40.0845 32.7019H42.4705V35.0687H40.0845V32.7019ZM42.4705 32.7019H44.8566V35.0687H42.4705V32.7019ZM44.8566 32.7019H47.2427V35.0687H44.8566V32.7019ZM49.6287 32.7019H52.0148V35.0687H49.6287V32.7019ZM54.4008 32.7019H56.7869V35.0687H54.4008V32.7019ZM56.7869 32.7019H59.1729V35.0687H56.7869V32.7019ZM59.1729 32.7019H61.559V35.0687H59.1729V32.7019ZM11.4518 35.0687H13.8379V37.4354H11.4518V35.0687ZM18.61 35.0687H20.996V37.4354H18.61V35.0687ZM20.996 35.0687H23.3821V37.4354H20.996V35.0687ZM28.1542 35.0687H30.5403V37.4354H28.1542V35.0687ZM30.5403 35.0687H32.9263V37.4354H30.5403V35.0687ZM35.3124 35.0687H37.6984V37.4354H35.3124V35.0687ZM37.6984 35.0687H40.0845V37.4354H37.6984V35.0687ZM40.0845 35.0687H42.4705V37.4354H40.0845V35.0687ZM47.2427 35.0687H49.6287V37.4354H47.2427V35.0687ZM49.6287 35.0687H52.0148V37.4354H49.6287V35.0687ZM54.4008 35.0687H56.7869V37.4354H54.4008V35.0687ZM59.1729 35.0687H61.559V37.4354H59.1729V35.0687ZM61.559 35.0687H63.9451V37.4354H61.559V35.0687ZM63.9451 35.0687H66.3311V37.4354H63.9451V35.0687ZM11.4518 37.4354H13.8379V39.8021H11.4518V37.4354ZM13.8379 37.4354H16.2239V39.8021H13.8379V37.4354ZM16.2239 37.4354H18.61V39.8021H16.2239V37.4354ZM18.61 37.4354H20.996V39.8021H18.61V37.4354ZM23.3821 37.4354H25.7681V39.8021H23.3821V37.4354ZM28.1542 37.4354H30.5403V39.8021H28.1542V37.4354ZM32.9263 37.4354H35.3124V39.8021H32.9263V37.4354ZM35.3124 37.4354H37.6984V39.8021H35.3124V37.4354ZM42.4705 37.4354H44.8566V39.8021H42.4705V37.4354ZM44.8566 37.4354H47.2427V39.8021H44.8566V37.4354ZM47.2427 37.4354H49.6287V39.8021H47.2427V37.4354ZM49.6287 37.4354H52.0148V39.8021H49.6287V37.4354ZM52.0148 37.4354H54.4008V39.8021H52.0148V37.4354ZM54.4008 37.4354H56.7869V39.8021H54.4008V37.4354ZM63.9451 37.4354H66.3311V39.8021H63.9451V37.4354ZM9.06574 39.8021H11.4518V42.1688H9.06574V39.8021ZM13.8379 39.8021H16.2239V42.1688H13.8379V39.8021ZM18.61 39.8021H20.996V42.1688H18.61V39.8021ZM20.996 39.8021H23.3821V42.1688H20.996V39.8021ZM28.1542 39.8021H30.5403V42.1688H28.1542V39.8021ZM30.5403 39.8021H32.9263V42.1688H30.5403V39.8021ZM32.9263 39.8021H35.3124V42.1688H32.9263V39.8021ZM44.8566 39.8021H47.2427V42.1688H44.8566V39.8021ZM47.2427 39.8021H49.6287V42.1688H47.2427V39.8021ZM54.4008 39.8021H56.7869V42.1688H54.4008V39.8021ZM59.1729 39.8021H61.559V42.1688H59.1729V39.8021ZM61.559 39.8021H63.9451V42.1688H61.559V39.8021ZM6.67969 42.1688H9.06574V44.5356H6.67969V42.1688ZM11.4518 42.1688H13.8379V44.5356H11.4518V42.1688ZM13.8379 42.1688H16.2239V44.5356H13.8379V42.1688ZM23.3821 42.1688H25.7681V44.5356H23.3821V42.1688ZM25.7681 42.1688H28.1542V44.5356H25.7681V42.1688ZM30.5403 42.1688H32.9263V44.5356H30.5403V42.1688ZM32.9263 42.1688H35.3124V44.5356H32.9263V42.1688ZM40.0845 42.1688H42.4705V44.5356H40.0845V42.1688ZM44.8566 42.1688H47.2427V44.5356H44.8566V42.1688ZM47.2427 42.1688H49.6287V44.5356H47.2427V42.1688ZM49.6287 42.1688H52.0148V44.5356H49.6287V42.1688ZM52.0148 42.1688H54.4008V44.5356H52.0148V42.1688ZM54.4008 42.1688H56.7869V44.5356H54.4008V42.1688ZM63.9451 42.1688H66.3311V44.5356H63.9451V42.1688ZM20.996 44.5356H23.3821V46.9023H20.996V44.5356ZM23.3821 44.5356H25.7681V46.9023H23.3821V44.5356ZM28.1542 44.5356H30.5403V46.9023H28.1542V44.5356ZM37.6984 44.5356H40.0845V46.9023H37.6984V44.5356ZM42.4705 44.5356H44.8566V46.9023H42.4705V44.5356ZM44.8566 44.5356H47.2427V46.9023H44.8566V44.5356ZM47.2427 44.5356H49.6287V46.9023H47.2427V44.5356ZM49.6287 44.5356H52.0148V46.9023H49.6287V44.5356ZM52.0148 44.5356H54.4008V46.9023H52.0148V44.5356ZM54.4008 44.5356H56.7869V46.9023H54.4008V44.5356ZM56.7869 44.5356H59.1729V46.9023H56.7869V44.5356ZM59.1729 44.5356H61.559V46.9023H59.1729V44.5356ZM61.559 44.5356H63.9451V46.9023H61.559V44.5356ZM63.9451 44.5356H66.3311V46.9023H63.9451V44.5356ZM25.7681 46.9023H28.1542V49.269H25.7681V46.9023ZM28.1542 46.9023H30.5403V49.269H28.1542V46.9023ZM40.0845 46.9023H42.4705V49.269H40.0845V46.9023ZM44.8566 46.9023H47.2427V49.269H44.8566V46.9023ZM54.4008 46.9023H56.7869V49.269H54.4008V46.9023ZM59.1729 46.9023H61.559V49.269H59.1729V46.9023ZM63.9451 46.9023H66.3311V49.269H63.9451V46.9023ZM6.67969 49.269H9.06574V51.6357H6.67969V49.269ZM9.06574 49.269H11.4518V51.6357H9.06574V49.269ZM11.4518 49.269H13.8379V51.6357H11.4518V49.269ZM13.8379 49.269H16.2239V51.6357H13.8379V49.269ZM16.2239 49.269H18.61V51.6357H16.2239V49.269ZM18.61 49.269H20.996V51.6357H18.61V49.269ZM20.996 49.269H23.3821V51.6357H20.996V49.269ZM30.5403 49.269H32.9263V51.6357H30.5403V49.269ZM44.8566 49.269H47.2427V51.6357H44.8566V49.269ZM49.6287 49.269H52.0148V51.6357H49.6287V49.269ZM54.4008 49.269H56.7869V51.6357H54.4008V49.269ZM59.1729 49.269H61.559V51.6357H59.1729V49.269ZM61.559 49.269H63.9451V51.6357H61.559V49.269ZM63.9451 49.269H66.3311V51.6357H63.9451V49.269ZM6.67969 51.6357H9.06574V54.0025H6.67969V51.6357ZM20.996 51.6357H23.3821V54.0025H20.996V51.6357ZM28.1542 51.6357H30.5403V54.0025H28.1542V51.6357ZM32.9263 51.6357H35.3124V54.0025H32.9263V51.6357ZM35.3124 51.6357H37.6984V54.0025H35.3124V51.6357ZM42.4705 51.6357H44.8566V54.0025H42.4705V51.6357ZM44.8566 51.6357H47.2427V54.0025H44.8566V51.6357ZM54.4008 51.6357H56.7869V54.0025H54.4008V51.6357ZM6.67969 54.0025H9.06574V56.3692H6.67969V54.0025ZM11.4518 54.0025H13.8379V56.3692H11.4518V54.0025ZM13.8379 54.0025H16.2239V56.3692H13.8379V54.0025ZM16.2239 54.0025H18.61V56.3692H16.2239V54.0025ZM20.996 54.0025H23.3821V56.3692H20.996V54.0025ZM28.1542 54.0025H30.5403V56.3692H28.1542V54.0025ZM30.5403 54.0025H32.9263V56.3692H30.5403V54.0025ZM32.9263 54.0025H35.3124V56.3692H32.9263V54.0025ZM40.0845 54.0025H42.4705V56.3692H40.0845V54.0025ZM44.8566 54.0025H47.2427V56.3692H44.8566V54.0025ZM47.2427 54.0025H49.6287V56.3692H47.2427V54.0025ZM49.6287 54.0025H52.0148V56.3692H49.6287V54.0025ZM52.0148 54.0025H54.4008V56.3692H52.0148V54.0025ZM54.4008 54.0025H56.7869V56.3692H54.4008V54.0025ZM56.7869 54.0025H59.1729V56.3692H56.7869V54.0025ZM63.9451 54.0025H66.3311V56.3692H63.9451V54.0025ZM6.67969 56.3692H9.06574V58.7359H6.67969V56.3692ZM11.4518 56.3692H13.8379V58.7359H11.4518V56.3692ZM13.8379 56.3692H16.2239V58.7359H13.8379V56.3692ZM16.2239 56.3692H18.61V58.7359H16.2239V56.3692ZM20.996 56.3692H23.3821V58.7359H20.996V56.3692ZM25.7681 56.3692H28.1542V58.7359H25.7681V56.3692ZM32.9263 56.3692H35.3124V58.7359H32.9263V56.3692ZM40.0845 56.3692H42.4705V58.7359H40.0845V56.3692ZM47.2427 56.3692H49.6287V58.7359H47.2427V56.3692ZM49.6287 56.3692H52.0148V58.7359H49.6287V56.3692ZM54.4008 56.3692H56.7869V58.7359H54.4008V56.3692ZM56.7869 56.3692H59.1729V58.7359H56.7869V56.3692ZM59.1729 56.3692H61.559V58.7359H59.1729V56.3692ZM61.559 56.3692H63.9451V58.7359H61.559V56.3692ZM63.9451 56.3692H66.3311V58.7359H63.9451V56.3692ZM6.67969 58.7359H9.06574V61.1026H6.67969V58.7359ZM11.4518 58.7359H13.8379V61.1026H11.4518V58.7359ZM13.8379 58.7359H16.2239V61.1026H13.8379V58.7359ZM16.2239 58.7359H18.61V61.1026H16.2239V58.7359ZM20.996 58.7359H23.3821V61.1026H20.996V58.7359ZM25.7681 58.7359H28.1542V61.1026H25.7681V58.7359ZM28.1542 58.7359H30.5403V61.1026H28.1542V58.7359ZM32.9263 58.7359H35.3124V61.1026H32.9263V58.7359ZM35.3124 58.7359H37.6984V61.1026H35.3124V58.7359ZM37.6984 58.7359H40.0845V61.1026H37.6984V58.7359ZM40.0845 58.7359H42.4705V61.1026H40.0845V58.7359ZM44.8566 58.7359H47.2427V61.1026H44.8566V58.7359ZM47.2427 58.7359H49.6287V61.1026H47.2427V58.7359ZM49.6287 58.7359H52.0148V61.1026H49.6287V58.7359ZM54.4008 58.7359H56.7869V61.1026H54.4008V58.7359ZM59.1729 58.7359H61.559V61.1026H59.1729V58.7359ZM61.559 58.7359H63.9451V61.1026H61.559V58.7359ZM6.67969 61.1026H9.06574V63.4694H6.67969V61.1026ZM20.996 61.1026H23.3821V63.4694H20.996V61.1026ZM25.7681 61.1026H28.1542V63.4694H25.7681V61.1026ZM30.5403 61.1026H32.9263V63.4694H30.5403V61.1026ZM32.9263 61.1026H35.3124V63.4694H32.9263V61.1026ZM35.3124 61.1026H37.6984V63.4694H35.3124V61.1026ZM37.6984 61.1026H40.0845V63.4694H37.6984V61.1026ZM40.0845 61.1026H42.4705V63.4694H40.0845V61.1026ZM47.2427 61.1026H49.6287V63.4694H47.2427V61.1026ZM49.6287 61.1026H52.0148V63.4694H49.6287V61.1026ZM54.4008 61.1026H56.7869V63.4694H54.4008V61.1026ZM59.1729 61.1026H61.559V63.4694H59.1729V61.1026ZM6.67969 63.4694H9.06574V65.8361H6.67969V63.4694ZM9.06574 63.4694H11.4518V65.8361H9.06574V63.4694ZM11.4518 63.4694H13.8379V65.8361H11.4518V63.4694ZM13.8379 63.4694H16.2239V65.8361H13.8379V63.4694ZM16.2239 63.4694H18.61V65.8361H16.2239V63.4694ZM18.61 63.4694H20.996V65.8361H18.61V63.4694ZM20.996 63.4694H23.3821V65.8361H20.996V63.4694ZM25.7681 63.4694H28.1542V65.8361H25.7681V63.4694ZM28.1542 63.4694H30.5403V65.8361H28.1542V63.4694ZM37.6984 63.4694H40.0845V65.8361H37.6984V63.4694ZM49.6287 63.4694H52.0148V65.8361H49.6287V63.4694ZM52.0148 63.4694H54.4008V65.8361H52.0148V63.4694ZM54.4008 63.4694H56.7869V65.8361H54.4008V63.4694ZM56.7869 63.4694H59.1729V65.8361H56.7869V63.4694ZM59.1729 63.4694H61.559V65.8361H59.1729V63.4694ZM61.559 63.4694H63.9451V65.8361H61.559V63.4694ZM63.9451 63.4694H66.3311V65.8361H63.9451V63.4694Z" fill="#1B1B1B"/>
                </svg>

                <h3 className={textStyles.title}>
                    Создай свой стиль <br/>
                    Загрузи сейчас
                </h3>

                <div className={cls.buttonsContainer}>
                    <a href={'./downloads/hofai/HOFAISuite_v1.0.5.1.rar'} style={{color: "#000", borderColor: "#000"}} className={cls.button}>
                        <svg className={cls.icon} width="18" height="17" viewBox="0 0 18 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.831 8.80856H8.49655V14.9335L17.831 16.1653V8.80856ZM7.89433 8.80856H0.96875V13.9412L7.89433 14.8548V8.80856ZM17.831 0.835938L8.49655 2.04723V8.26109H17.831V0.835938ZM7.89433 2.12593L0.96875 3.02584V8.26109H7.89433V2.12593Z"
                                fill="black"/>
                        </svg>

                        Загрузить сейчас
                    </a>

                    <a href={'http://onelink.to/eyq75z'} style={{color: "#000", borderColor: "#000"}} className={cls.button}>
                        <svg className={cls.icon} width="19" height="21" viewBox="0 0 19 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.6175 5.11328C11.7947 5.11328 11.0244 5.98308 9.75494 5.98308C8.45341 5.98308 7.46065 5.11961 5.88109 5.11961C4.33499 5.11961 2.68627 6.06355 1.63926 7.67158C0.169102 9.9392 0.418649 14.21 2.79974 17.8483C3.65145 19.1507 4.78888 20.6114 6.28073 20.6272H6.30786C7.60441 20.6272 7.98958 19.7782 9.77393 19.7683H9.80105C11.5587 19.7683 11.9114 20.6222 13.2025 20.6222H13.2296C14.7215 20.6064 15.9199 18.988 16.7716 17.6905C17.3846 16.7574 17.6125 16.2891 18.0827 15.2335C14.6383 13.9261 14.0849 9.04319 17.4913 7.17114C16.4516 5.86915 14.9904 5.11509 13.613 5.11509L13.6175 5.11328Z"
                                fill="black"/>
                            <path
                                d="M13.2194 0.375C12.1344 0.448689 10.8686 1.13946 10.1272 2.04136C9.45451 2.85871 8.90116 4.07118 9.11816 5.24703H9.20496C10.3605 5.24703 11.5431 4.55129 12.2339 3.65979C12.8993 2.81124 13.4039 1.60872 13.2194 0.375Z"
                                fill="black"/>
                        </svg>

                        App Store
                    </a>

                    <a href={'http://onelink.to/eyq75z'} style={{color: "#000", borderColor: "#000"}} className={cls.button}>
                        <svg className={cls.icon} width="18" height="11" viewBox="0 0 18 11" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.2011 3.36643L14.6634 0.616245C14.7026 0.54242 14.7133 0.454755 14.6932 0.37239C14.673 0.290025 14.6237 0.219651 14.556 0.176634C14.5225 0.155305 14.4855 0.141398 14.447 0.135719C14.4086 0.13004 14.3694 0.132701 14.3319 0.143549C14.2944 0.154397 14.2593 0.173216 14.2285 0.198915C14.1978 0.224615 14.172 0.256684 14.1528 0.293266L12.6722 3.07896C11.5419 2.51823 10.2696 2.20609 8.90134 2.20609C7.53305 2.20609 6.26082 2.51861 5.13044 3.07896L3.6499 0.293266C3.61046 0.219503 3.54563 0.165776 3.4697 0.143904C3.39376 0.122031 3.31293 0.133804 3.24499 0.176634C3.17705 0.219464 3.12757 0.289841 3.10742 0.372284C3.08728 0.454727 3.09812 0.542482 3.13757 0.616245L4.59642 3.36643C2.07606 4.84824 0.367929 7.61936 0.0859375 10.8634H17.7147C17.4327 7.61936 15.7246 4.84824 13.2011 3.36643ZM4.85293 8.1756C4.70679 8.1756 4.56393 8.12855 4.44242 8.0404C4.32091 7.95225 4.22621 7.82696 4.17028 7.68038C4.11436 7.53379 4.09972 7.3725 4.12823 7.21688C4.15674 7.06127 4.22712 6.91833 4.33045 6.80613C4.43379 6.69394 4.56545 6.61754 4.70878 6.58658C4.85211 6.55563 5.00068 6.57152 5.13569 6.63224C5.27071 6.69295 5.3861 6.79577 5.46729 6.9277C5.54849 7.05962 5.59182 7.21472 5.59182 7.37339C5.59173 7.58612 5.51385 7.7901 5.3753 7.94053C5.23675 8.09095 5.04887 8.1755 4.85293 8.1756ZM12.9442 8.1756C12.7982 8.17493 12.6557 8.12732 12.5346 8.03877C12.4135 7.95022 12.3193 7.8247 12.2638 7.67805C12.2084 7.53141 12.1942 7.37022 12.223 7.21483C12.2519 7.05944 12.3225 6.91681 12.426 6.80496C12.5294 6.6931 12.6611 6.61703 12.8043 6.58635C12.9476 6.55567 13.096 6.57175 13.2308 6.63256C13.3657 6.69338 13.4809 6.7962 13.5619 6.92805C13.643 7.0599 13.6862 7.21487 13.6862 7.37339C13.6862 7.47888 13.667 7.58332 13.6297 7.68075C13.5925 7.77818 13.5379 7.86668 13.4691 7.94119C13.4003 8.0157 13.3187 8.07475 13.2289 8.11497C13.139 8.15519 13.0428 8.1758 12.9456 8.1756H12.9442Z"
                                fill="black"/>
                        </svg>

                        Google Play
                    </a>
                </div>

                <div className={cls.image}/>
            </section>

            <HomeAbout boxClassName={clspage.back}/>
        </div>
    );
};
