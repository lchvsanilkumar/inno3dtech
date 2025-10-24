'use client';
import React, { useState, useEffect } from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UploadButton = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/sign-in");
    }
  }, [session, status, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!session) {
      router.push("/sign-in");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
        }),
      });

      if (response.ok) {
        // Clear form data and reset imageUrl
        setFormData({ name: "", description: "", price: "" });
        setImageUrl("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error creating product");
        if (imageUrl) {
          setImageUrl("");
        }
      }
    } catch (err) {
      setError("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  return (

    <><style jsx>{`
      .contactButton {
        position: fixed;
        top: 1.1rem;
        left: 1rem;
        display: flex;
        align-items: center;
        background-color: #004aad;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border-bottom: 2px solid #004aad;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
      }

      .contactButton:hover {
        filter: brightness(110%);
        transform: translateY(-1px);
        border-bottom: 4px solid #004aad;
      }

      .contactButton:active {
        filter: brightness(90%);
        transform: translateY(1px);
        border-bottom: 1px solid #004aad;
      }

      .form-container {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 400px;
        width: 100%;
      }

      .lottie-container {
        width: 300px;
        height: 300px;
      }

      @media (max-width: 767px) {
        .contactButton {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          display: flex;
        }

        .form-container {
          max-width: 150%;
          width: 150%;
          padding: 20px;
          margin: 0 auto;
          margin-top: 20px;
          margin-left: -55px;
        }

        .lottie-container {
          width: 100%;
          height: auto;
          margin-top: 0;
        }
      }
    `}</style><main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center overflow-hidden">
        <div className="flex flex-col items-center w-full">
          <form
            onSubmit={handleSubmit}
            className="form-container flex flex-col space-y-4 rounded-md shadow-md"
          >
            {error && <p className="text-red-500">{error}</p>}
            <UploadDropzone
              appearance={{
                container: { border: "1px solid blue" },
                uploadIcon: { color: "blue" },
              }}
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].url);
              } } />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="border p-2" />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product Description"
              required
              className="border p-2" />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Product Price"
              required
              className="border p-2" />
            <button
              type="submit"
              style={{
                background: "#004AAD",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </main></>
  );
};

export default UploadButton;
