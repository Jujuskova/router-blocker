import {FormEvent, useCallback, useState} from "react";
import {useHistoryBlock} from "./useHistoryBlock";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Submitted!");
        setName("");
        setEmail("");
    }

    const isBlocking = useCallback(() => name.length > 0 || email.length > 0, [name, email])

    useHistoryBlock(isBlocking())

    return (
        <form
            onSubmit={onSubmit}
        >
            <label htmlFor="name">Name</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
            />
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
            />

            <button type="submit">Submit</button>

            <hr/>

            <pre>Blocking? {isBlocking() ? "Yes" : "No"}</pre>
        </form>
    );
}

function Home() {
    return <h1>Home</h1>;
}

function About() {
    return <h1>About</h1>;
}

function Contact() {
    return (
        <>
            <h1>Contact us</h1>
            <Form/>
        </>
    );
}

export {Home, About, Contact}