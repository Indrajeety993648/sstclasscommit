import useWindowSize from "../../hooks/useWindow";

function WindowDetail() {
    let dimensions = useWindowSize();

    return (
        <div>
            <h1>Window Detail</h1>
            
            <p>
                Width: {dimensions.width}
                <br />
                height: {dimensions.height}
            </p>
        </div>
    );
}

export default WindowDetail;