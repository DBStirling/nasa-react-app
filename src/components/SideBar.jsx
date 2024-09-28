export default function SideBar(props) {
    const {handleToggleModal, showModal} = props
    
    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">
                <h2>The Baron but Beautiful Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>gbyberflb evev geg cgeivg ;evievl bebhv livhjwc</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}