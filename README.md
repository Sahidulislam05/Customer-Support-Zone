# React Basic Questions

## 1. What is JSX, and why is it used?

**JSX** হলো JavaScript এর ভিতরে HTML-এর মতো কোড লেখার একটি সিনট্যাক্স।  
এটা ব্যবহার করলে React কম্পোনেন্ট লেখা অনেক সহজ হয়, কারণ আমরা একসাথে HTML ও JavaScript ব্যবহার করতে পারি।  
 উদাহরণ:

```jsx
const element = <h1>Sahidul Islam!</h1>;
```

## 2. What is the difference between State and Props?

State:
কম্পোনেন্টের ভেতরে ডাটা ধরে রাখার জন্য ব্যবহার হয়। সময়ের সাথে বদলাতে পারে।
যেমন: কাউন্টার অ্যাপে সংখ্যা বাড়ানো বা কমানো।

Props:
প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাটা পাঠানোর জন্য ব্যবহার হয়। এটা read-only, মানে সরাসরি বদলানো যায় না।
যেমন:

```
<Button text="Click Me"/> এখানে text হলো props।
```

## 3. What is the useState hook, and how does it work?

useState হলো React এর একটি Hook যেটা দিয়ে আমরা State বানাতে পারি।
এটা একটা ভ্যালু আর একটা ফাংশন দেয় (getter + setter)।
উদাহরণ:

```
const [count, setCount] = useState(0);

setCount(count + 1);
```

## 4. How can you share state between components in React?

State শেয়ার করার কিছু উপায়:

Lifting State Up:
প্যারেন্ট কম্পোনেন্টে State রেখে সেটা props দিয়ে চাইল্ড কম্পোনেন্টে পাঠানো।

Context API:
অনেকগুলো কম্পোনেন্টে একসাথে ডাটা পাঠাতে হলে Context ব্যবহার করা হয়।

State Management Tools:
যেমন Redux, Zustand ইত্যাদি (এগুলো একটু অ্যাডভান্সড)।

## 5. How is event handling done in React?

React এ ইভেন্ট হ্যান্ডলিং অনেকটা JavaScript এর মতো, তবে কিছু পার্থক্য আছে:

#### 1. camelCase ব্যবহার করতে হয়

JavaScript এ আমরা লিখি onclick, কিন্তু React এ লিখতে হয় onClick।

#### 2. ফাংশন পাস করতে হয়

ইভেন্টে সরাসরি ফাংশন কল না করে শুধু ফাংশনের নাম দিতে হয়।

#### 3. Synthetic Event System

React নিজের একটি ইভেন্ট সিস্টেম ব্যবহার করে যেটাকে বলা হয় Synthetic Events।
এটা সব ব্রাউজারে একরকম কাজ করে।

উদাহরণ:

```
function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

```

এখানে যখন button ক্লিক হবে, তখন handleClick ফাংশন চালু হবে।
