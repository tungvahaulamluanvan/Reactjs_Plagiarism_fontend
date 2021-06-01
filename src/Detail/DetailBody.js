import Iframe from "./Iframe";

function DetailBody(props) {
    const src = './result.pdf';
    return (
        <div>
            <div class="body-document">
        <div class="maindoc">
        <Iframe src={src}></Iframe>
        </div>
        <div class="sidebar">
        <div class="top-label">
            <h3>Overview</h3>
        </div>
        <div class="source-link">
            <div class="link-element">
                <div class="left">
                    <h2>1</h2>
                </div>
                <div class="mid">
                    <div class="top">
                        <p>www.wiki.org</p>
                    </div>
                    <div class="bot">
                        <p>internet source</p>
                    </div>
                </div>
                <div class="right">
                    <h2>20%</h2>
                </div>
            </div>
            <div class="link-element">
                <div class="left">
                    <h2>1</h2>
                </div>
                <div class="mid">
                    <div class="top">
                        <p>www.wiki.org</p>
                    </div>
                    <div class="bot">
                        <p>internet source</p>
                    </div>
                </div>
                <div class="right">
                    <h2>20%</h2>
                </div>
            </div>
            <div class="link-element">
                <div class="left">
                    <h2>1</h2>
                </div>
                <div class="mid">
                    <div class="top">
                        <p>www.wiki.org</p>
                    </div>
                    <div class="bot">
                        <p>internet source</p>
                    </div>
                </div>
                <div class="right">
                    <h2>20%</h2>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default DetailBody;