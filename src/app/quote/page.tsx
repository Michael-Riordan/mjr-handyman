'use client'
import { useForm, ValidationError } from "@formspree/react";

export default function Quote() {
    const [state, handleSubmit] = useForm("movlzoyg");

    if (state.succeeded) {
        return <p className="text-blue-900 text-2xl text-center h-screen mt-20">Thanks for reaching out! We'll get back to you shortly!</p>;
    }

    return (
        <div
            className="h-screen">
            <h1 
                className="text-3xl font-semibold mb-8 text-blue-900 text-center mt-10"
            >
                Get a Free Quote!
            </h1>

            <form 
                onSubmit={handleSubmit}
                className="text-blue-900 font-semibold bg-slate-50 flex flex-col justify-self-center items-center p-6 rounded-2xl mb-6 h-3/4"
            >
                <label 
                    htmlFor="email"
                    className="text-xl mb-4"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="JohnDoe@gmail.com"
                    className="bg-gray-200 rounded-xl p-2 text-center mb-4"
                    required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label 
                    htmlFor="service"
                    className="text-xl mb-4"
                >
                    Select a Service
                </label>
                <select
                    id="service"
                    name="service"
                    className="bg-gray-200 rounded-xl p-2 text-center mb-4"
                    required
                >
                    <option value="-placeholder">--Select a Service--</option>
                    <option value="faucet">Faucet Replacement / Installation</option>
                    <option value="toilet">Toilet Replacement / Installation</option>
                    <option value="ceiling-fan">Ceiling Fan Replacement / Installation</option>
                    <option value="light-fixture">Light Fixture Replacement / Installation</option>
                    <option value="garbage-disposal">Garbage Disposal Installation</option>
                    <option value="showerhead">Showerhead Replacement</option>
                    <option value="door-lock">Door Handle / Lock Replacement</option>
                    <option value="tv-mounting">TV Mounting</option>
                    <option value="shelving">Shelving Installation</option>
                    <option value="furniture-assembly">Furniture Assembly</option>
                    <option value="caulking">Caulking & Sealing (Bath / Kitchen)</option>
                    <option value="other">Other (Custom Request)</option>
                </select>
                <label
                    htmlFor="message"
                    className="mb-4 text-xl"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="..."
                    className="bg-gray-200 rounded-xl p-2 md:w-3/4 md:h-3/4"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="hover:cursor-pointer rounded-xl p-2 bg-blue-200 mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
        );
}