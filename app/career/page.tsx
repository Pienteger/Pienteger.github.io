import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Pienteger®",
    description: "Here you can find the latest career opportunities at Pienteger®.",
};

const Career: React.FC = () => {
    return (
        <div className="content">
            <h1>Careers</h1>
            <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7.00016C10.2761 7.00016 10.5 7.22402 10.5 7.50016V11.5002C10.5 11.7763 10.2761 12.0002 10 12.0002C9.72386 12.0002 9.5 11.7763 9.5 11.5002V7.50016C9.5 7.22402 9.72386 7.00016 10 7.00016ZM10 14.5002C10.4142 14.5002 10.75 14.1644 10.75 13.7502C10.75 13.3359 10.4142 13.0002 10 13.0002C9.58579 13.0002 9.25 13.3359 9.25 13.7502C9.25 14.1644 9.58579 14.5002 10 14.5002ZM8.68569 2.85232C9.25558 1.81616 10.7444 1.81615 11.3143 2.85232L17.8731 14.7773C18.4229 15.777 17.6996 17.0002 16.5587 17.0002H3.44129C2.30038 17.0002 1.57714 15.777 2.12696 14.7773L8.68569 2.85232ZM10.4381 3.33424C10.2482 2.98885 9.75187 2.98885 9.56191 3.33424L3.00318 15.2592C2.8199 15.5924 3.06098 16.0002 3.44129 16.0002H16.5587C16.939 16.0002 17.1801 15.5924 16.9969 15.2592L10.4381 3.33424Z" fill="currentColor" />
                </svg>
                <span>
                    No career opportunity is available at the moment. Please check back later.
                </span>
            </div>
        </div>
    );
}

export default Career;