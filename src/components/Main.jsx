export default function Main(props) {
    const {data} = props
    return (
        <div>
            <div className="imgContainer">
                <img className="bgImage" src="{data.hdurl}" alt={data?.title || 'bg-image'}></img>
            </div>
        </div>
    )
}