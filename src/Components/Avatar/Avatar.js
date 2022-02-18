const Avatar = ({ name }) => {
    return (
        <div className="w-100 d-flex justify-content-center align-items-center">
            <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center" style={{ width: 100, height: 100 }}>
                <p className="font-weight-bold text-uppercase h1 text-light">{name.substring(0, 1)}</p>
            </div>
        </div>
    );
}
export default Avatar;