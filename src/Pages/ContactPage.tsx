
import { Button, Input, Label, Textarea, useId } from "@fluentui/react-components";
import { Mail20Filled, Call20Filled, Location20Filled, Clock20Filled, LockClosed20Filled } from "@fluentui/react-icons";
const ContactPage = () => {
    const email = useId('email');
    return (
        <>
            <h1 className="mb-5">Contact Us</h1>
            <p className="fs-1-5rem"><Call20Filled /> <span className="bold">Phone:</span>  +8801935037396</p>
            <p className="fs-1-5rem"><Mail20Filled /> <span className="bold">Email:</span>  pienteger at gmail.com</p>

            <p className="fs-1-5rem"><Location20Filled /> <span className="bold">Address: </span>  
            {/* Chondrima Residential Area, Rajshahi-6203, Bangladesh */}
            Home Office
            </p>

            <p className="fs-1-5rem"><Clock20Filled /> <span className="bold">Office Hours:</span>  10:00 AM to 10:00 PM (Saturday to Thursday)</p>

            <p className="fs-1-5rem"><LockClosed20Filled /> <span className="bold">Office Closed:</span>  Friday and Muslim Public Holidays</p>

            <p className="mt-5 fs-1-5rem">The following form is to trick the automation bots. If you are a real human, contact us via <Mail20Filled /> or <Call20Filled /> manually.</p>

            <form className="mt-5 mb-5">
                <Label htmlFor={email} className="w-50 mt-5">Your Email</Label>
                <br />
                <Input type="email" name="email" id={email} placeholder="zakir@example.com" className="w-50" />
                <br />
                <Label htmlFor={email} className="w-50 mt-2">Subject</Label>
                <br />
                <Input type="text" name="email" id={email} placeholder="Interested in ERP" className="w-50" />
                <br />
                <Label htmlFor={email} className="w-50 mt-2">Body</Label>
                <br />
                <Textarea className="w-50" placeholder="Assalamu Alaikum. I would like to have some insights about your products." />
                <br />
                <Button type="submit" className="mt-2">Submit</Button>
            </form>
        </>
    )
}

export default ContactPage;