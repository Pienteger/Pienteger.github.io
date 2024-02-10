import { Mail20Regular, Call20Regular, Location20Regular, Clock20Regular, LockClosed20Regular } from "@fluentui/react-icons";
const Contact = () => {
    const email = 'email';
    return (
        <>
            <div className="md:px-40 px-5 pt-10">
                <h1 className="text-3xl font-bold mb-2">Contact Us</h1>

                <table>
                    <tbody>
                        <tr>
                            <td className="p-1"><Call20Regular /></td>
                            <td className="p-1"><span className="font-semibold">Phone:</span></td>
                            <td className="p-1">+88 019 35 03 73 96</td>
                        </tr>
                        <tr>
                            <td className="p-1"><Mail20Regular /></td>
                            <td className="p-1"><span className="font-semibold">Email:</span></td>
                            <td className="p-1">info at pienteger.com</td>
                        </tr>
                        <tr>
                            <td className="p-1"><Location20Regular /></td>
                            <td className="p-1"><span className="font-semibold">Address:</span></td>
                            <td className="p-1">Home Office</td>
                        </tr>
                        <tr>
                            <td className="p-1"><Clock20Regular /></td>
                            <td className="p-1"><span className="font-semibold">Office Hours:</span></td>
                            <td className="p-1">10:00 AM to 10:00 PM (Saturday to Thursday)</td>
                        </tr>
                        <tr>
                            <td className="p-1"><LockClosed20Regular /></td>
                            <td className="p-1"><span className="font-semibold">Office Closed:</span></td>
                            <td className="p-1">Friday and Muslim Public Holidays</td>
                        </tr>
                    </tbody>
                </table>

                <form className="mt-5 mb-5 hidden">
                    <label htmlFor={email} className="w-50 mt-5">Your Email</label>
                    <br />
                    <input type="email" name="email" id={email} placeholder="zakir@example.com" className="w-50" />
                    <br />
                    <label htmlFor={email} className="w-50 mt-2">Subject</label>
                    <br />
                    <input type="text" name="email" id={email} placeholder="Interested in ERP" className="w-50" />
                    <br />
                    <label htmlFor={email} className="w-50 mt-2">Body</label>
                    <br />
                    <textarea className="w-50" placeholder="Assalamu Alaikum. I would like to have some insights about your products." />
                    <br />
                    <button type="submit" className="mt-2">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Contact;
