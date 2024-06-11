function handleSubmit(e) {
    console.log(e);
}

const loginPage = (req, res) => {
    const html = `
    <div>
        <form action="${handleSubmit()}">
            Name: <input type="text" />
            Password: <input type="password" />
            <input type="submit" />
        </form>
    </div>
    `
    return res.send(html);
}

module.exports = {loginPage}