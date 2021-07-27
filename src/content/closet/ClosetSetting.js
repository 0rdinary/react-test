function ClosetSetting({location}) {
    const closet = location.state.closet;

    return (
        <div>
            {closet.id}
            {closet.name}
            {closet.img}
            {closet.array}
        </div>
    )
}

export default ClosetSetting;