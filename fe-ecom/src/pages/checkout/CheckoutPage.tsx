import React, { useState } from "react";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import HeroSection from "../../shared/components/HeroSection/HeroSection";
import Features from "../../shared/components/Features/Features";

// Types for our component
interface OrderItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface CheckoutProps {
  initialItems?: OrderItem[];
}

const CheckoutPage: React.FC<CheckoutProps> = ({ initialItems = [] }) => {
  // State for form fields
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<
    "credit_card" | "paypal" | "afterpay"
  >("credit_card");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  // Delivery method state
  const [deliveryMethod, setDeliveryMethod] = useState<"standard" | "express">(
    "standard",
  );

  // Order items state with default values
  const [items, setItems] = useState<OrderItem[]>(
    initialItems.length
      ? initialItems
      : [
          {
            id: 1,
            name: "Basic Tee",
            color: "Black",
            size: "Large",
            price: 32.0,
            quantity: 1,
          },
          {
            id: 2,
            name: "Basic Tee",
            color: "Sienna",
            size: "Large",
            price: 32.0,
            quantity: 1,
          },
        ],
  );

  // Calculate order totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = deliveryMethod === "standard" ? 5.0 : 15.0;
  const taxAmount = subtotal * 0.085; // Assuming 8.5% tax rate
  const total = subtotal + shippingCost + taxAmount;

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order data to your backend
    console.log({
      email,
      shippingInfo: {
        firstName,
        lastName,
        address,
        phone,
      },
      deliveryMethod,
      paymentMethod,
      paymentDetails:
        paymentMethod === "credit_card"
          ? { cardNumber, nameOnCard, expirationDate, cvc }
          : {},
      items,
      orderTotal: { subtotal, shipping: shippingCost, tax: taxAmount, total },
    });
    alert("Order submitted!");
  };

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="main">
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <form
              onSubmit={handleSubmit}
              className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12"
            >
              <div className="lg:col-span-7">
                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-medium text-gray-900">
                    Contact information
                  </h2>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Shipping Information */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-medium text-gray-900">
                    Shipping information
                  </h2>
                  <div className="grid grid-cols-1 gap-y-4">
                    <div className="grid grid-cols-2 gap-x-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-medium text-gray-900">
                    Delivery method
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`cursor-pointer rounded-md border p-4 ${deliveryMethod === "standard" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                      onClick={() => setDeliveryMethod("standard")}
                    >
                      <div className="mb-2 flex items-center">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                            deliveryMethod === "standard"
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          } mr-2`}
                        >
                          {deliveryMethod === "standard" && (
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">Standard</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        4-10 business days
                      </p>
                      <p className="mt-1 text-sm font-medium">$5.00</p>
                    </div>
                    <div
                      className={`cursor-pointer rounded-md border p-4 ${deliveryMethod === "express" ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                      onClick={() => setDeliveryMethod("express")}
                    >
                      <div className="mb-2 flex items-center">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                            deliveryMethod === "express"
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          } mr-2`}
                        >
                          {deliveryMethod === "express" && (
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">Express</span>
                      </div>
                      <p className="text-sm text-gray-500">2-5 business days</p>
                      <p className="mt-1 text-sm font-medium">$15.00</p>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-medium text-gray-900">
                    Payment
                  </h2>
                  <div className="space-y-4">
                    <div className="Pay-method flex justify-start gap-10">
                      <div className="flex items-center">
                        <input
                          id="credit-card"
                          name="payment-method"
                          type="radio"
                          checked={paymentMethod === "credit_card"}
                          onChange={() => setPaymentMethod("credit_card")}
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="credit-card"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Credit card
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="paypal"
                          name="payment-method"
                          type="radio"
                          checked={paymentMethod === "paypal"}
                          onChange={() => setPaymentMethod("paypal")}
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="paypal"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          PayPal
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="afterpay"
                          name="payment-method"
                          type="radio"
                          checked={paymentMethod === "afterpay"}
                          onChange={() => setPaymentMethod("afterpay")}
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="afterpay"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Afterpay
                        </label>
                      </div>
                    </div>

                    {paymentMethod === "credit_card" && (
                      <div className="mt-4 space-y-4 rounded-md border border-gray-200 p-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="mb-1 block text-sm font-medium text-gray-700"
                          >
                            Card number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="1234 1234 1234 1234"
                            required={paymentMethod === "credit_card"}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="nameOnCard"
                            className="mb-1 block text-sm font-medium text-gray-700"
                          >
                            Name on card
                          </label>
                          <input
                            type="text"
                            id="nameOnCard"
                            value={nameOnCard}
                            onChange={(e) => setNameOnCard(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required={paymentMethod === "credit_card"}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div>
                            <label
                              htmlFor="expirationDate"
                              className="mb-1 block text-sm font-medium text-gray-700"
                            >
                              Expiration date (MM/YY)
                            </label>
                            <input
                              type="text"
                              id="expirationDate"
                              value={expirationDate}
                              onChange={(e) =>
                                setExpirationDate(e.target.value)
                              }
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              placeholder="MM/YY"
                              required={paymentMethod === "credit_card"}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="cvc"
                              className="mb-1 block text-sm font-medium text-gray-700"
                            >
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cvc"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              placeholder="123"
                              required={paymentMethod === "credit_card"}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-5 lg:mt-0">
                <h2 className="mb-4 text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.id} className="flex py-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                        <div className="flex h-full w-full items-center justify-center text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-8 w-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.color}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.size}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>

                          <div className="flex items-center rounded-md border border-gray-300">
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="p-1 text-gray-500 hover:text-gray-700"
                              disabled={item.quantity <= 1}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="p-1 text-gray-500 hover:text-gray-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between py-2">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <p className="text-sm text-gray-600">Shipping</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${shippingCost.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <p className="text-sm text-gray-600">Taxes</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${taxAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-gray-200 py-2">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Confirm order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Features></Features>
      <Footer></Footer>
    </>
  );
};

export default CheckoutPage;
