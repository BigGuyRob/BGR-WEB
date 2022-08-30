import './App.css';
import './resources/productstrings.js'
/**
 * 
 * @param {*} props - featuredTitle, featuredPhoto1, featuredPhoto2, featuredPhoto3
 *  productHeadingparagraph, productHeadingtitle
 * Slot0Tag, titleSlot0, titleSlot1, titleSlot2, titleSlot3, titleSlot4, titleSlot5, titleSlot6
 * pgSlot1, pgSlot2, pgSlot3, pgSlot4, pgSlot5, pgSlot6
 * priceSlot1, priceSlot2, priceSlot3, priceSlot4, priceSlot5, priceSlot6
 * @returns 
 */
function Productblock(props) {
  return (
    <div className="productblock">
       <section className="py-4 py-xl-5">
        <div className="container">
            <Productbigheader featuredTitle= {props.featuredTitle}/>
        </div>
        </section>
    <div className="container py-2 py-xl-3">
        <header></header>
        <div className="row gy-4 gy-md-0">
            <div className="col-md-6">
                <Productimagecollection ProductImage1 = {props.productImage1} ProductImage2 = {props.productImage2} ProductImage3 = {props.productImage3}/>
            </div>
            <div className="col-md-6 d-sm-flex align-items-sm-center">      
                <Productheading productHeadingparagraph = {props.productHeadingparagraph} productHeadingtitle = {props.productHeadingtitle} headingDisclaimer = {props.headingDisclaimer}/>
            </div>
        </div>
    </div>
    <div className="container text-white bg-primary border rounded border-0 p-4 p-lg-4 py-4 py-sm-3" style= {{"background": "linear-gradient(6deg, black, rgb(48,107,107) 80%, white 100%), rgb(48,107,107)", "color": "var(--bs-white)"}}>
        <Slot0 Slot0Tag ={props.Slot0Tag} titleSlot0 = {props.titleSlot0}/>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
            <Slot1 titleSlot1 = {props.titleSlot1} pgSlot1 = {props.pgSlot1} priceSlot1 = {props.priceSlot1}/>
            </div>
            <div className="col">
            <Slot2 titleSlot2 = {props.titleSlot2} pgSlot2 = {props.pgSlot2} priceSlot2 = {props.priceSlot2}/>
            </div>
            <div className="col">
            <Slot3 titleSlot3 = {props.titleSlot3} pgSlot3 = {props.pgSlot3} priceSlot3 = {props.priceSlot3}/>
            </div>
            <div className="col">
            <Slot4 titleSlot4 = {props.titleSlot4} pgSlot4 = {props.pgSlot4} priceSlot4 = {props.priceSlot4}/>
            </div>
            <div className="col">
            <Slot5 titleSlot5 = {props.titleSlot5} pgSlot5 = {props.pgSlot5} priceSlot5 = {props.priceSlot5}/>
            </div>
            <div className="col">
            <Slot6 titleSlot6 = {props.titleSlot6} pgSlot6 = {props.pgSlot6} priceSlot6 = {props.priceSlot6}/>   
            </div>
        </div>
    </div>
    </div>
  );
}

function Slot1(props){
    return (
        <div className="d-flex">
            <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-camera-video-fill">
            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"></path>
            </svg></div>
            <div className="px-3">
            <h4 className="text-white">{props.titleSlot1}</h4>
            <p style = {{"textAlign" :"left"}}>{props.pgSlot1}</p>
            <p style = {{"textAlign" :"left"}}>{props.priceSlot1}</p>
            </div>
        </div>
    );
}

function Slot2(props){
    return (
        <div className="d-flex">
                    <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-cpu-fill">
                            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h4 className="text-white">{props.titleSlot2}</h4>
                        <p style = {{"textAlign" :"left"}}>{props.pgSlot2}</p>
                        <p style = {{"textAlign" :"left"}}>{props.priceSlot2}</p>
            </div>
        </div>
    );
}

function Slot3(props){
    return(
        <div className="d-flex">
            <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-diagram-3-fill">
                <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"></path>
            </svg></div>
            <div className="px-3">
                <h4 className="text-white">{props.titleSlot3}</h4>
                <p style = {{"textAlign" :"left"}}>{props.pgSlot3}</p>
                <p style = {{"textAlign" :"left"}}>{props.priceSlot3}</p>
            </div>
        </div>
    );
}

function Slot4 (props){
    return(
        <div className="d-flex">
            <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-device-hdd-fill">
                <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm9 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-9.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.882 11.177a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588a4 4 0 1 1 1.946.47c-.537.813-1.02 1.515-1.181 1.677Zm1.903-2.78A3.001 3.001 0 0 0 8 4a3 3 0 0 0-.891 5.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96ZM9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
            </svg></div>
            <div className="px-3">
                <h4 className="text-white">{props.titleSlot4}</h4>
                <p style = {{"textAlign" :"left"}}>{props.pgSlot4}</p>
                <p style = {{"textAlign" :"left"}}>{props.priceSlot4}</p>
            </div>
        </div>
    );
}

function Slot5(props){
    return(
        <div className="d-flex">
                    <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-motherboard-fill">
                            <path fillRule="evenodd" d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4a1 1 0 0 1 1-1v-.5a.5.5 0 0 1 1 0V3h1v-.5a.5.5 0 0 1 1 0V3a1 1 0 0 1 1 1h.5a.5.5 0 0 1 0 1H9v1h.5a.5.5 0 0 1 0 1H9a1 1 0 0 1-1 1v.5a.5.5 0 0 1-1 0V8H6v.5a.5.5 0 0 1-1 0V8a1 1 0 0 1-1-1h-.5a.5.5 0 0 1 0-1H4V5h-.5a.5.5 0 0 1 0-1H4Zm1 .5V7h3V4H5v.5Zm6 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1Z"></path>
                        </svg></div>
                    <div className="px-3">
                        <h4 className="text-white">{props.titleSlot5}</h4>
                        <p style = {{"textAlign" :"left"}}>{props.pgSlot5}</p>
                        <p style = {{"textAlign" :"left"}}>{props.priceSlot5}</p>
                    </div>
                </div>
    );
}

function Slot6(props){
    return(
        <div className="d-flex">
        <div className="bs-icon-sm bs-icon-rounded bs-icon-semi-white text-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(28, 28, 28)" viewBox="0 0 16 16" className="bi bi-fan">
                <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"></path>
            </svg></div>
        <div className="px-3">
            <h4 className="text-white">{props.titleSlot6}</h4>
            <p style = {{"textAlign" :"left"}}>{props.pgSlot6}</p>
            <p style = {{"textAlign" :"left"}}>{props.priceSlot6}</p>
        </div>
        </div>
    );
}

function Slot0(props){
    return (
<div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto" style={{"borderColor": "var(--bs-purple)"}}>
                <h2 className="text-white"></h2>
                <p className="w-lg-50" style = {{"textAlign" :"center"}}>{props.Slot0Tag}</p>
                <p className="w-lg-50" style = {{"textAlign" :"center"}}>{props.titleSlot0}</p>
            </div>
        </div>
    );
}

function Productheading(props){
    return(
<div style= {{"maxWidth": "350px"}}>
                    <h2 className="text-uppercase fw-bold">{props.productHeadingtitle}</h2>
                    <p className="my-3" style = {{"textAlign" :"left"}}>{props.productHeadingparagraph}</p>
                    <p style ={{"textAlign" :"left"}}>{props.headingDisclaimer}</p>
                    <a className="btn btn-primary btn-lg me-2" role="button" href="#submitbtn" style={{"background": "rgb(48,107,107)"}}>Reserve</a>
                    <a className="btn btn-outline-primary btn-lg" role="button" href="#submitbtn" style={{"background": "rgb(48,107,107)","color": "var(--bs-gray-100)"}}>Contact</a>
                </div>
    );
}

function Productimagecollection(props){
    return(
        <div className="p-l-5 m-l-5">
                    <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                        <div className="carousel-inner">
                            <div className="carousel-item active"><img className="w-100 d-block" src={props.ProductImage1} alt="Slide Image"></img></div>
                            <div className="carousel-item"><img className="w-100 d-block" src={props.ProductImage2} alt="Slide Image"></img></div>
                            <div className="carousel-item"><img className="w-100 d-block" src={props.ProductImage3} alt="Slide Image"></img></div>
                        </div>
                        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
    );
}

function Productbigheader(props){
    return(
        <div className="text-white bg-dark border rounded border-0 p-4 p-md-5">
                <h2 className="fw-bold text-white mb-3">{props.featuredTitle}</h2>
                <p className="mb-1"></p>
                <div className="my-3"></div>
            </div>
    );
}
export default Productblock;
