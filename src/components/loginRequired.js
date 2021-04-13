const LoginRequired = (hello) => {
    console.log(hello);
    return (
        <div className="container">
            <p>You must login to access to this page</p>
        </div>
    )
}
export default LoginRequired;