import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {

    const data = useActionData();

    return (
        <div className="contact">
            <h1 className="contact__title">Contact Us</h1>
            <Form method="post" action="/help/contact" className="contact__form">
                <label htmlFor="">
                    <h2>Name:</h2>
                    <input type="text" name="name" placeholder="John Doe" required />
                </label>
                <label htmlFor="">
                    <h2>Email:</h2>
                    <input type="email" name="email" placeholder="john.doe@gmail.com" required />
                </label>
                <label htmlFor="">
                    <h2>Comment:</h2>
                    <textarea rows="6" name="comment" placeholder="type your comment" required></textarea>
                </label>
                {data && data.error && <p>{data.error}</p>}
                <button className="contact__button">Submit</button>
            </Form>
            {/* <button className="contact__button">Submit</button> */}
        </div>
    );
}

export default Contact;

export const submitAction = async ({ request }) => {
    const data = await request.formData()
    const submission = {
        first_name: data.get('name'),
        email: data.get('email'),
        comment: data.get('comment')
    }
    if (submission.first_name.length <= 2) {
        return { error: 'Wrong input! Name must be over 2 charcaters.' }
    }
    return redirect('/')
}