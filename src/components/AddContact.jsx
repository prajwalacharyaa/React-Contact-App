import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("There should not be any empty Fields!!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };
    render() {
        return (
            <div className="ui main">
                <h2 style={{ color: '#1ca8f0', fontSize: '20px' }}>Add New Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="ui button blue" style={{ background: '#1ca8f0' }}>Add</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;
