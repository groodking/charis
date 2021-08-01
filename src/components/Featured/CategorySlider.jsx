import React,{useState} from 'react';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img 4.png";
import img5 from "../../assets/img 5.png";
import img6 from "../../assets/img 6.png";
import img7 from "../../assets/img 7.png";
import img8 from "../../assets/img 8.png";
import img9 from "../../assets/img 9.png";
import "./Slider.css";


export default function CategorySlider() {
    const [selectedmain, setselectedFirst] = useState(img1)
    const [selectedback, setselectedback] = useState('#e6d7c3')
    return (
        <div className="container containers">
            <div className="row slider_row" style={{background:selectedback}}>
                <div className="col-lg-6 Img_Description">
                    <h1 className="mav">Jute bag</h1>
                    <p className="mav_descp">Reprehenderit do veniam aliquip nisi dolore ea duis amet. Do do occaecat incididunt in nulla dolore magna magna ea nisi. Laborum elit incididunt culpa sunt ad ea eiusmod velit anim in non sit consequat.</p>
                    <a type="button" className="btn btn-lg btn-primary more_info"  href="!#" target="_new">Learn More</a>
                </div>
                <div className="col-lg-6">
                    <img src={selectedmain} alt=" " className="Main_Im"/>
                </div>
                <div className="col-lg-12 col-md col-sm col-xs" align="center">
                    <ul className="slider_list">
                    <li className="items" data-text="bag1" onClick={() => {setselectedFirst(img1); setselectedback('#e6d7c3');}}><img src={img1} alt=" "/></li>
                    <li className="items" data-text="bag2" onClick={() => {setselectedFirst(img2); setselectedback('#efeae1');}}><img src={img2} alt=" "/></li>
                    <li className="items" data-text="bag3" onClick={() => {setselectedFirst(img3); setselectedback('#d0bb50');}}><img src={img3} alt=" "/></li>
                    <li className="items" data-text="bag4" onClick={() => {setselectedFirst(img4); setselectedback('#947652');}}><img src={img4}  alt=" "/></li>
                    <li className="items" data-text="bag5" onClick={() => {setselectedFirst(img5); setselectedback('#c4bbb0');}}><img src={img5}  alt=" "/></li>
                    <li className="items" data-text="bag6" onClick={() => {setselectedFirst(img6); setselectedback('#a2b44f');}}><img src={img6}  alt=" "/></li>
                    <li className="items" data-text="bag7" onClick={() => {setselectedFirst(img7); setselectedback('#e8e2e5');}}><img src={img7}  alt=" "/></li>
                    <li className="items" data-text="bag8" onClick={() => {setselectedFirst(img8); setselectedback('#decfbf');}}><img src={img8}  alt=" "/></li>
                    <li className="items" data-text="bag9" onClick={() => {setselectedFirst(img9); setselectedback('#c2a78a');}}><img src={img9}  alt=" "/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
