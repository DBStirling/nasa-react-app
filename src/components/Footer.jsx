export default function Footer(props) {
    const {handleToggleModal, showModal} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>The Baron but Beautiful Martian Landscape</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}