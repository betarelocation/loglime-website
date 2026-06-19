"use client";

import { useState } from "react";
import { CalendarCheck } from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function RequestDemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantType, setRestaurantType] = useState("Cafe");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, restaurantType })
      });
      
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.message || "We could not submit your request right now.");
        return;
      }

      setState("success");
      setName("");
      setEmail("");
      setRestaurantType("Cafe");
      setMessage(data.message || "Thank you! Your demo request has been received.");
    } catch {
      setState("error");
      setMessage("We could not submit your request right now. Please try again shortly.");
    }
  }

  return (
    <form className="nex-form-card" onSubmit={handleSubmit}>
      <span className="feature-icon">
        <CalendarCheck size={24} />
      </span>
      <h2 className="h2">Book a walkthrough</h2>
      
      <div className="field">
        <label htmlFor="name">Name</label>
        <input 
          className="input" 
          id="name" 
          placeholder="Your name" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="field">
        <label htmlFor="email">Email</label>
        <input 
          className="input" 
          id="email" 
          placeholder="you@restaurant.com" 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div className="field">
        <label htmlFor="restaurant">Restaurant type</label>
        <select 
          className="select" 
          id="restaurant"
          value={restaurantType}
          onChange={(e) => setRestaurantType(e.target.value)}
        >
          <option value="Cafe">Cafe</option>
          <option value="Quick service">Quick service</option>
          <option value="Fine dining">Fine dining</option>
          <option value="Multi-location">Multi-location</option>
        </select>
      </div>
      
      <button className="btn btn-primary" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Submitting..." : "Request demo"}
      </button>

      {message && (
        <p 
          className={state === "success" ? "subscribe-message success" : "subscribe-message error"} 
          role="status"
          style={{ marginTop: '12px' }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
