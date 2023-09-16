import "../styles/index.scss";
import Nav from "../Components/Navigation";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { NextSeo } from "next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { useEffect, useState, useRef } from "react";
import Link from "next/link.js";
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  const [secondes, setSecondes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((secondes) => secondes + 1);
    }, 1000);
    if (typeof window !== "undefined" && secondes > 3) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        // loader.style.zIndex = "-1700";
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [secondes]);

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <NextSeo
        title="Pramod Joshi"
        description="Hey, my name is Pramod Joshi but I am much better known as PJ. I am FrontEnd Engineer and web integrator from India, I’m passionate about creating beautiful, intuitive and responsive websites."
        canonical="https://linktr.ee/pramod_joshi"
        openGraph={{
          url: "https://singlecoredevelopers.tech/",
          title: "Pramod Joshi",
          description:
            "Hey, my name is Pramod Joshi but I am much better known as PJ. I am FrontEnd Engineer and web integrator from India, I’m passionate about creating beautiful, intuitive and responsive websites.",
          images: [
            {
              url: "/images/man.jpg",
              alt: "Pramod Joshi",
              type: "image/jpeg",
              secureUrl: "https://linktr.ee/pramod_joshi",
            },
          ],
          siteName: "Pramod Joshi",
        }}
        twitter={{
          handle: "@ln_dev7",
          site: "@ln_dev7",
          cardType: "summary_large_image",
        }}
      />
      <GoogleAnalytics measurementId="G-E7N5LJTEWP" />
      <AnimatePresence mode="wait" initial={true}  onExitComplete={() => window.scrollTo(0, 0)}>
        <MouseContextProvider>
          <Cursor />
          <header className="header">
            <Link href="/" className="header-logo">
              <svg
                width="30"
                height="39"
                viewBox="-2 0 1149 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 40.381 52.686 L 40.381 54.786 Q 40.381 58.35 38.941 61.475 A 18.094 18.094 0 0 1 35.083 66.944 A 17.984 17.984 0 0 1 29.468 70.63 Q 26.27 71.973 22.705 71.973 L 17.676 71.973 Q 14.112 71.973 10.913 70.63 A 17.984 17.984 0 0 1 5.298 66.944 A 18.094 18.094 0 0 1 1.441 61.475 A 15.787 15.787 0 0 1 0 54.786 L 0 52.002 L 6.299 50.977 L 6.299 54.786 A 10.147 10.147 0 0 0 7.251 59.156 A 11.853 11.853 0 0 0 9.815 62.72 Q 11.426 64.258 13.55 65.137 Q 15.674 66.016 18.018 66.016 L 22.412 66.016 Q 24.756 66.016 26.856 65.137 A 12.078 12.078 0 0 0 30.567 62.72 A 11.853 11.853 0 0 0 33.13 59.156 A 10.147 10.147 0 0 0 34.082 54.786 L 34.082 52.686 Q 34.082 49.073 32.666 46.68 Q 31.25 44.288 28.907 42.603 A 23.642 23.642 0 0 0 25.048 40.364 A 27.561 27.561 0 0 0 23.609 39.746 Q 20.655 38.575 17.53 37.403 Q 14.405 36.231 11.451 34.815 A 21.994 21.994 0 0 1 6.153 31.275 A 15.704 15.704 0 0 1 2.667 26.643 A 18.129 18.129 0 0 1 2.393 26.075 Q 1.165 23.407 1.002 19.675 A 26.768 26.768 0 0 1 0.977 18.506 L 0.977 17.188 Q 0.977 13.623 2.32 10.498 A 17.327 17.327 0 0 1 6.006 5.03 Q 8.35 2.686 11.499 1.343 Q 14.649 0 18.213 0 L 22.705 0 Q 26.27 0 29.395 1.343 A 17.327 17.327 0 0 1 34.864 5.03 Q 37.207 7.373 38.55 10.498 Q 39.893 13.623 39.893 17.188 L 39.893 18.995 L 33.594 20.02 L 33.594 17.188 A 11.002 11.002 0 0 0 32.968 13.459 A 10.417 10.417 0 0 0 32.715 12.818 A 11.329 11.329 0 0 0 30.323 9.278 A 11.329 11.329 0 0 0 26.783 6.885 A 10.808 10.808 0 0 0 22.631 6.008 A 12.383 12.383 0 0 0 22.412 6.006 L 18.506 6.006 A 11.002 11.002 0 0 0 14.777 6.632 A 10.417 10.417 0 0 0 14.136 6.885 A 11.63 11.63 0 0 0 10.572 9.278 Q 9.034 10.791 8.155 12.818 A 10.808 10.808 0 0 0 7.278 16.969 A 12.383 12.383 0 0 0 7.276 17.188 L 7.276 18.506 A 13.298 13.298 0 0 0 7.509 21.066 Q 7.851 22.808 8.692 24.17 A 13.225 13.225 0 0 0 12.288 27.985 A 15.139 15.139 0 0 0 12.451 28.101 Q 14.795 29.737 17.749 30.933 A 1166.589 1166.589 0 0 0 23.78 33.355 A 1574.5 1574.5 0 0 0 23.828 33.374 A 75.921 75.921 0 0 1 29.908 36.109 A 22.918 22.918 0 0 1 35.205 39.771 A 16.103 16.103 0 0 1 38.68 44.467 A 18.635 18.635 0 0 1 38.965 45.069 A 14.94 14.94 0 0 1 40.005 48.417 Q 40.381 50.37 40.381 52.686 Z M 277.393 71.973 L 272.412 71.973 Q 268.848 71.973 265.699 70.63 Q 262.549 69.288 260.205 66.944 A 17.327 17.327 0 0 1 256.519 61.475 Q 255.176 58.35 255.176 54.786 L 255.176 17.188 Q 255.176 13.623 256.519 10.498 A 17.327 17.327 0 0 1 260.205 5.03 Q 262.549 2.686 265.699 1.343 Q 268.848 0 272.412 0 L 277.393 0 Q 280.957 0 284.082 1.343 A 17.327 17.327 0 0 1 289.551 5.03 Q 291.895 7.373 293.238 10.498 Q 294.58 13.623 294.58 17.188 L 294.58 20.02 L 288.282 20.996 L 288.282 17.188 A 11.002 11.002 0 0 0 287.656 13.459 A 10.417 10.417 0 0 0 287.403 12.818 A 11.329 11.329 0 0 0 285.01 9.278 A 11.329 11.329 0 0 0 281.47 6.885 A 10.808 10.808 0 0 0 277.319 6.008 A 12.383 12.383 0 0 0 277.1 6.006 L 272.705 6.006 A 11.002 11.002 0 0 0 268.976 6.632 A 10.417 10.417 0 0 0 268.335 6.885 A 11.63 11.63 0 0 0 264.771 9.278 Q 263.233 10.791 262.354 12.818 A 10.808 10.808 0 0 0 261.477 16.969 A 12.383 12.383 0 0 0 261.475 17.188 L 261.475 54.786 A 11.002 11.002 0 0 0 262.101 58.515 A 10.417 10.417 0 0 0 262.354 59.156 A 11.417 11.417 0 0 0 264.771 62.72 Q 266.309 64.258 268.335 65.137 A 10.808 10.808 0 0 0 272.486 66.014 A 12.383 12.383 0 0 0 272.705 66.016 L 277.1 66.016 A 11.002 11.002 0 0 0 280.829 65.39 A 10.417 10.417 0 0 0 281.47 65.137 A 11.126 11.126 0 0 0 285.01 62.72 A 11.63 11.63 0 0 0 287.403 59.156 A 10.808 10.808 0 0 0 288.28 55.005 A 12.383 12.383 0 0 0 288.282 54.786 L 288.282 50.977 L 294.58 52.002 L 294.58 54.786 Q 294.58 58.35 293.238 61.475 A 17.327 17.327 0 0 1 289.551 66.944 A 17.327 17.327 0 0 1 284.082 70.63 Q 280.957 71.973 277.393 71.973 Z M 854.2 71.973 L 850.196 71.973 A 14.919 14.919 0 0 1 844.409 70.826 A 15.416 15.416 0 0 1 839.576 67.676 A 15.517 15.517 0 0 1 836.255 62.989 A 13.418 13.418 0 0 1 835.01 57.276 L 835.01 55.274 L 841.016 54.297 L 841.016 57.618 Q 841.016 59.424 841.773 61.011 Q 842.53 62.598 843.799 63.77 A 9.751 9.751 0 0 0 846.729 65.625 A 9.018 9.018 0 0 0 850.196 66.309 L 854.2 66.309 Q 856.006 66.309 857.666 65.772 A 9.77 9.77 0 0 0 860.186 64.55 A 9.079 9.079 0 0 0 860.62 64.234 Q 861.914 63.233 862.671 61.817 A 6.421 6.421 0 0 0 863.381 59.473 A 7.984 7.984 0 0 0 863.428 58.594 A 10.086 10.086 0 0 0 863.263 56.717 Q 863.057 55.63 862.594 54.758 A 5.779 5.779 0 0 0 862.256 54.2 A 9.537 9.537 0 0 0 859.655 51.658 A 11.228 11.228 0 0 0 859.156 51.343 A 18.583 18.583 0 0 0 856.535 50.061 A 23 23 0 0 0 854.761 49.439 A 397.262 397.262 0 0 0 849.707 47.925 Q 847.119 47.168 844.654 46.192 Q 842.188 45.215 840.259 43.628 A 11.693 11.693 0 0 1 837.317 39.963 A 13.532 13.532 0 0 1 837.159 39.649 A 10.701 10.701 0 0 1 836.317 37.148 Q 836.069 35.976 836.007 34.618 A 20.31 20.31 0 0 1 835.987 33.692 A 13.596 13.596 0 0 1 836.491 29.939 A 12.102 12.102 0 0 1 837.159 28.15 A 13.345 13.345 0 0 1 840.332 23.829 A 14.494 14.494 0 0 1 844.954 21.037 A 16.387 16.387 0 0 1 844.995 21.021 A 15.916 15.916 0 0 1 850.307 20.024 A 18.109 18.109 0 0 1 850.684 20.02 L 854.2 20.02 A 14.387 14.387 0 0 1 859.912 21.167 A 14.758 14.758 0 0 1 864.6 24.317 Q 866.602 26.319 867.749 29.004 A 14.387 14.387 0 0 1 868.897 34.717 L 868.897 34.913 L 862.891 35.889 L 862.891 34.375 Q 862.891 32.569 862.207 30.982 A 8.758 8.758 0 0 0 860.352 28.223 Q 859.18 27.051 857.593 26.368 Q 856.006 25.684 854.2 25.684 L 850.684 25.684 A 10.787 10.787 0 0 0 848.021 26.005 A 9.789 9.789 0 0 0 847.29 26.221 A 8.61 8.61 0 0 0 845.264 27.206 A 7.714 7.714 0 0 0 844.532 27.759 A 7.333 7.333 0 0 0 842.676 30.176 A 6.85 6.85 0 0 0 842.059 32.308 A 8.669 8.669 0 0 0 841.993 33.399 A 9.351 9.351 0 0 0 842.157 35.206 Q 842.372 36.295 842.866 37.157 A 5.448 5.448 0 0 0 843.164 37.622 A 9.475 9.475 0 0 0 845.457 39.865 A 11.434 11.434 0 0 0 846.265 40.381 A 19.252 19.252 0 0 0 848.886 41.642 A 24.013 24.013 0 0 0 850.659 42.261 Q 853.125 43.018 855.689 43.824 A 59.741 59.741 0 0 1 860.718 45.655 A 17.115 17.115 0 0 1 864.684 47.946 A 15.956 15.956 0 0 1 865.113 48.291 Q 867.041 49.903 868.213 52.32 A 10.904 10.904 0 0 1 869.054 54.838 Q 869.302 56.015 869.364 57.375 A 20.338 20.338 0 0 1 869.385 58.301 A 13.055 13.055 0 0 1 868.834 62.138 A 11.796 11.796 0 0 1 868.164 63.843 Q 866.944 66.358 864.844 68.164 A 15.393 15.393 0 0 1 860.179 70.901 A 17.433 17.433 0 0 1 859.986 70.972 Q 857.227 71.973 854.2 71.973 Z M 106.348 70.996 L 100.342 70.996 L 100.342 34.375 Q 100.342 32.569 99.659 30.982 A 8.758 8.758 0 0 0 97.803 28.223 Q 96.631 27.051 95.044 26.368 Q 93.457 25.684 91.651 25.684 L 87.647 25.684 Q 85.84 25.684 84.253 26.368 A 8.758 8.758 0 0 0 81.494 28.223 Q 80.323 29.395 79.639 30.982 Q 78.955 32.569 78.955 34.375 L 78.955 70.996 L 72.95 70.996 L 72.95 20.996 L 74.951 20.996 L 78.223 26.075 A 15.011 15.011 0 0 1 83.374 21.656 Q 86.475 20.02 90.137 20.02 L 91.651 20.02 A 14.387 14.387 0 0 1 97.364 21.167 A 14.758 14.758 0 0 1 102.051 24.317 Q 104.053 26.319 105.201 29.004 A 14.387 14.387 0 0 1 106.348 34.717 L 106.348 70.996 Z M 137.549 91.016 L 135.059 91.016 Q 132.032 91.016 129.346 90.015 A 14.641 14.641 0 0 1 125.301 87.752 A 13.755 13.755 0 0 1 124.659 87.207 Q 122.657 85.401 121.509 82.862 Q 120.362 80.323 120.362 77.295 L 120.362 77.1 Q 120.362 74.17 121.436 71.729 A 13.393 13.393 0 0 1 124.366 67.481 A 10.547 10.547 0 0 1 120.63 63.648 A 10.524 10.524 0 0 1 119.239 58.301 A 10.917 10.917 0 0 1 120.362 53.394 A 9.875 9.875 0 0 1 123.438 49.707 A 15.046 15.046 0 0 1 119.727 44.776 A 14.335 14.335 0 0 1 118.372 39.113 A 16.725 16.725 0 0 1 118.36 38.477 L 118.36 34.717 A 14.387 14.387 0 0 1 119.507 29.004 A 14.758 14.758 0 0 1 122.657 24.317 Q 124.659 22.315 127.344 21.167 A 14.387 14.387 0 0 1 133.057 20.02 L 135.547 20.02 Q 139.209 20.02 142.31 21.656 A 15.011 15.011 0 0 1 147.461 26.075 L 150.733 20.996 L 152.735 20.996 L 152.735 38.477 A 14.387 14.387 0 0 1 151.587 44.19 A 14.758 14.758 0 0 1 148.438 48.877 Q 146.436 50.879 143.75 52.027 A 14.387 14.387 0 0 1 138.037 53.174 L 129.346 53.174 A 4.73 4.73 0 0 0 127.393 53.589 Q 126.465 54.004 125.757 54.688 A 4.749 4.749 0 0 0 124.659 56.324 Q 124.268 57.276 124.268 58.301 Q 124.268 59.327 124.659 60.254 A 5.078 5.078 0 0 0 125.757 61.89 A 5.078 5.078 0 0 0 127.393 62.989 Q 128.321 63.379 129.346 63.379 L 137.549 63.379 Q 140.576 63.379 143.262 64.38 A 14.641 14.641 0 0 1 147.307 66.643 A 13.755 13.755 0 0 1 147.95 67.188 Q 149.951 68.995 151.099 71.534 Q 152.246 74.073 152.246 77.1 L 152.246 77.295 A 13.93 13.93 0 0 1 151.716 81.185 A 12.507 12.507 0 0 1 151.099 82.862 Q 149.951 85.401 147.95 87.207 A 14.351 14.351 0 0 1 143.595 89.887 A 16.342 16.342 0 0 1 143.262 90.015 A 16.174 16.174 0 0 1 137.738 91.015 A 18.214 18.214 0 0 1 137.549 91.016 Z M 204.493 71.973 L 200.489 71.973 A 14.387 14.387 0 0 1 194.776 70.826 A 14.758 14.758 0 0 1 190.088 67.676 Q 188.086 65.674 186.939 62.989 A 14.387 14.387 0 0 1 185.791 57.276 L 185.791 34.717 A 14.387 14.387 0 0 1 186.939 29.004 A 14.758 14.758 0 0 1 190.088 24.317 Q 192.09 22.315 194.776 21.167 A 14.387 14.387 0 0 1 200.489 20.02 L 204.493 20.02 A 14.387 14.387 0 0 1 210.205 21.167 A 14.758 14.758 0 0 1 214.893 24.317 Q 216.895 26.319 218.042 29.004 A 14.387 14.387 0 0 1 219.19 34.717 L 219.19 46.485 L 191.797 46.485 L 191.797 57.618 Q 191.797 59.424 192.481 61.011 A 8.758 8.758 0 0 0 194.336 63.77 Q 195.508 64.942 197.095 65.625 Q 198.682 66.309 200.489 66.309 L 204.493 66.309 Q 206.299 66.309 207.886 65.625 A 8.758 8.758 0 0 0 210.645 63.77 Q 211.817 62.598 212.5 61.011 Q 213.184 59.424 213.184 57.618 L 213.184 54.297 L 219.19 55.274 L 219.19 57.276 A 14.387 14.387 0 0 1 218.042 62.989 A 14.758 14.758 0 0 1 214.893 67.676 Q 212.891 69.678 210.205 70.826 A 14.387 14.387 0 0 1 204.493 71.973 Z M 399.414 71.973 L 395.41 71.973 A 14.387 14.387 0 0 1 389.698 70.826 A 14.758 14.758 0 0 1 385.01 67.676 Q 383.008 65.674 381.861 62.989 A 14.387 14.387 0 0 1 380.713 57.276 L 380.713 34.717 A 14.387 14.387 0 0 1 381.861 29.004 A 14.758 14.758 0 0 1 385.01 24.317 Q 387.012 22.315 389.698 21.167 A 14.387 14.387 0 0 1 395.41 20.02 L 399.414 20.02 A 14.387 14.387 0 0 1 405.127 21.167 A 14.758 14.758 0 0 1 409.815 24.317 Q 411.817 26.319 412.964 29.004 A 14.387 14.387 0 0 1 414.112 34.717 L 414.112 46.485 L 386.719 46.485 L 386.719 57.618 Q 386.719 59.424 387.403 61.011 A 8.758 8.758 0 0 0 389.258 63.77 Q 390.43 64.942 392.017 65.625 Q 393.604 66.309 395.41 66.309 L 399.414 66.309 Q 401.221 66.309 402.808 65.625 A 8.758 8.758 0 0 0 405.567 63.77 Q 406.739 62.598 407.422 61.011 Q 408.106 59.424 408.106 57.618 L 408.106 54.297 L 414.112 55.274 L 414.112 57.276 A 14.387 14.387 0 0 1 412.964 62.989 A 14.758 14.758 0 0 1 409.815 67.676 Q 407.813 69.678 405.127 70.826 A 14.387 14.387 0 0 1 399.414 71.973 Z M 522.217 71.973 L 518.213 71.973 A 14.387 14.387 0 0 1 512.5 70.826 A 14.758 14.758 0 0 1 507.813 67.676 Q 505.811 65.674 504.663 62.989 A 14.387 14.387 0 0 1 503.516 57.276 L 503.516 34.717 A 14.387 14.387 0 0 1 504.663 29.004 A 14.758 14.758 0 0 1 507.813 24.317 Q 509.815 22.315 512.5 21.167 A 14.387 14.387 0 0 1 518.213 20.02 L 522.217 20.02 A 14.387 14.387 0 0 1 527.93 21.167 A 14.758 14.758 0 0 1 532.618 24.317 Q 534.619 26.319 535.767 29.004 A 14.387 14.387 0 0 1 536.914 34.717 L 536.914 46.485 L 509.522 46.485 L 509.522 57.618 Q 509.522 59.424 510.205 61.011 A 8.758 8.758 0 0 0 512.061 63.77 Q 513.233 64.942 514.82 65.625 Q 516.407 66.309 518.213 66.309 L 522.217 66.309 Q 524.024 66.309 525.611 65.625 A 8.758 8.758 0 0 0 528.369 63.77 Q 529.541 62.598 530.225 61.011 Q 530.909 59.424 530.909 57.618 L 530.909 54.297 L 536.914 55.274 L 536.914 57.276 A 14.387 14.387 0 0 1 535.767 62.989 A 14.758 14.758 0 0 1 532.618 67.676 Q 530.616 69.678 527.93 70.826 A 14.387 14.387 0 0 1 522.217 71.973 Z M 608.008 71.973 L 604.004 71.973 A 14.387 14.387 0 0 1 598.291 70.826 A 14.758 14.758 0 0 1 593.604 67.676 Q 591.602 65.674 590.454 62.989 A 14.387 14.387 0 0 1 589.307 57.276 L 589.307 34.717 A 14.387 14.387 0 0 1 590.454 29.004 A 14.758 14.758 0 0 1 593.604 24.317 Q 595.606 22.315 598.291 21.167 A 14.387 14.387 0 0 1 604.004 20.02 L 608.008 20.02 A 14.387 14.387 0 0 1 613.721 21.167 A 14.758 14.758 0 0 1 618.409 24.317 Q 620.41 26.319 621.558 29.004 A 14.387 14.387 0 0 1 622.705 34.717 L 622.705 46.485 L 595.313 46.485 L 595.313 57.618 Q 595.313 59.424 595.996 61.011 A 8.758 8.758 0 0 0 597.852 63.77 Q 599.024 64.942 600.611 65.625 Q 602.198 66.309 604.004 66.309 L 608.008 66.309 Q 609.815 66.309 611.402 65.625 A 8.758 8.758 0 0 0 614.16 63.77 Q 615.332 62.598 616.016 61.011 Q 616.7 59.424 616.7 57.618 L 616.7 54.297 L 622.705 55.274 L 622.705 57.276 A 14.387 14.387 0 0 1 621.558 62.989 A 14.758 14.758 0 0 1 618.409 67.676 Q 616.407 69.678 613.721 70.826 A 14.387 14.387 0 0 1 608.008 71.973 Z M 765.284 71.973 L 761.28 71.973 A 14.387 14.387 0 0 1 755.567 70.826 A 14.758 14.758 0 0 1 750.879 67.676 Q 748.877 65.674 747.73 62.989 A 14.387 14.387 0 0 1 746.582 57.276 L 746.582 34.717 A 14.387 14.387 0 0 1 747.73 29.004 A 14.758 14.758 0 0 1 750.879 24.317 Q 752.881 22.315 755.567 21.167 A 14.387 14.387 0 0 1 761.28 20.02 L 765.284 20.02 A 14.387 14.387 0 0 1 770.996 21.167 A 14.758 14.758 0 0 1 775.684 24.317 Q 777.686 26.319 778.833 29.004 A 14.387 14.387 0 0 1 779.981 34.717 L 779.981 46.485 L 752.588 46.485 L 752.588 57.618 Q 752.588 59.424 753.272 61.011 A 8.758 8.758 0 0 0 755.127 63.77 Q 756.299 64.942 757.886 65.625 Q 759.473 66.309 761.28 66.309 L 765.284 66.309 Q 767.09 66.309 768.677 65.625 A 8.758 8.758 0 0 0 771.436 63.77 Q 772.608 62.598 773.291 61.011 Q 773.975 59.424 773.975 57.618 L 773.975 54.297 L 779.981 55.274 L 779.981 57.276 A 14.387 14.387 0 0 1 778.833 62.989 A 14.758 14.758 0 0 1 775.684 67.676 Q 773.682 69.678 770.996 70.826 A 14.387 14.387 0 0 1 765.284 71.973 Z M 719.873 71.973 L 718.36 71.973 A 14.523 14.523 0 0 1 712.861 70.936 A 13.976 13.976 0 0 1 712.11 70.606 Q 709.229 69.239 707.178 66.797 L 707.178 91.016 L 701.172 91.016 L 701.172 20.996 L 703.174 20.996 L 706.446 26.075 A 15.011 15.011 0 0 1 711.597 21.656 Q 714.698 20.02 718.36 20.02 L 719.873 20.02 A 14.387 14.387 0 0 1 725.586 21.167 A 14.758 14.758 0 0 1 730.274 24.317 Q 732.276 26.319 733.423 29.004 A 14.387 14.387 0 0 1 734.571 34.717 L 734.571 57.276 A 14.387 14.387 0 0 1 733.423 62.989 A 14.758 14.758 0 0 1 730.274 67.676 Q 728.272 69.678 725.586 70.826 A 14.387 14.387 0 0 1 719.873 71.973 Z M 582.325 20.996 L 564.6 70.996 L 561.621 70.996 L 543.897 20.996 L 549.903 20.996 L 562.94 58.887 L 563.135 61.475 L 563.33 58.887 L 576.319 20.996 L 582.325 20.996 Z M 473.291 70.996 L 451.123 70.996 L 451.123 0.977 L 473.291 0.977 Q 476.856 0.977 480.005 2.32 Q 483.155 3.663 485.498 6.006 Q 487.842 8.35 489.185 11.499 Q 490.528 14.649 490.528 18.213 L 490.528 53.809 Q 490.528 57.373 489.185 60.498 A 17.327 17.327 0 0 1 485.498 65.967 Q 483.155 68.311 480.005 69.654 Q 476.856 70.996 473.291 70.996 Z M 484.229 53.809 L 484.229 18.213 A 11.002 11.002 0 0 0 483.603 14.484 A 10.417 10.417 0 0 0 483.35 13.843 A 11.417 11.417 0 0 0 480.933 10.279 Q 479.395 8.741 477.368 7.862 A 10.808 10.808 0 0 0 473.217 6.985 A 12.383 12.383 0 0 0 472.998 6.983 L 457.422 6.983 L 457.422 64.991 L 472.998 64.991 A 11.002 11.002 0 0 0 476.727 64.365 A 10.417 10.417 0 0 0 477.368 64.112 A 11.63 11.63 0 0 0 480.933 61.719 Q 482.471 60.205 483.35 58.179 A 10.808 10.808 0 0 0 484.227 54.028 A 12.383 12.383 0 0 0 484.229 53.809 Z M 171.778 70.996 L 165.772 70.996 L 165.772 0.977 L 171.778 0.977 L 171.778 70.996 Z M 642.725 70.996 L 636.719 70.996 L 636.719 0.977 L 642.725 0.977 L 642.725 70.996 Z M 325.293 71.973 L 321.289 71.973 A 14.387 14.387 0 0 1 315.576 70.826 A 14.758 14.758 0 0 1 310.889 67.676 Q 308.887 65.674 307.74 62.989 A 14.387 14.387 0 0 1 306.592 57.276 L 306.592 34.717 A 14.387 14.387 0 0 1 307.74 29.004 A 14.758 14.758 0 0 1 310.889 24.317 Q 312.891 22.315 315.576 21.167 A 14.387 14.387 0 0 1 321.289 20.02 L 325.293 20.02 A 14.387 14.387 0 0 1 331.006 21.167 A 14.758 14.758 0 0 1 335.694 24.317 Q 337.696 26.319 338.843 29.004 A 14.387 14.387 0 0 1 339.991 34.717 L 339.991 57.276 A 14.387 14.387 0 0 1 338.843 62.989 A 14.758 14.758 0 0 1 335.694 67.676 Q 333.692 69.678 331.006 70.826 A 14.387 14.387 0 0 1 325.293 71.973 Z M 674.463 71.973 L 670.459 71.973 A 14.387 14.387 0 0 1 664.746 70.826 A 14.758 14.758 0 0 1 660.059 67.676 Q 658.057 65.674 656.909 62.989 A 14.387 14.387 0 0 1 655.762 57.276 L 655.762 34.717 A 14.387 14.387 0 0 1 656.909 29.004 A 14.758 14.758 0 0 1 660.059 24.317 Q 662.061 22.315 664.746 21.167 A 14.387 14.387 0 0 1 670.459 20.02 L 674.463 20.02 A 14.387 14.387 0 0 1 680.176 21.167 A 14.758 14.758 0 0 1 684.864 24.317 Q 686.866 26.319 688.013 29.004 A 14.387 14.387 0 0 1 689.16 34.717 L 689.16 57.276 A 14.387 14.387 0 0 1 688.013 62.989 A 14.758 14.758 0 0 1 684.864 67.676 Q 682.862 69.678 680.176 70.826 A 14.387 14.387 0 0 1 674.463 71.973 Z M 372.705 26.709 L 366.7 26.709 Q 364.893 26.709 363.306 27.393 A 8.758 8.758 0 0 0 360.547 29.248 Q 359.375 30.42 358.692 32.007 Q 358.008 33.594 358.008 35.401 L 358.008 70.996 L 352.002 70.996 L 352.002 20.996 L 354.004 20.996 L 357.276 26.075 A 15.011 15.011 0 0 1 362.427 21.656 Q 365.528 20.02 369.19 20.02 L 372.705 20.02 L 372.705 26.709 Z M 812.696 26.709 L 806.69 26.709 Q 804.883 26.709 803.296 27.393 A 8.758 8.758 0 0 0 800.537 29.248 Q 799.366 30.42 798.682 32.007 Q 797.998 33.594 797.998 35.401 L 797.998 70.996 L 791.993 70.996 L 791.993 20.996 L 793.994 20.996 L 797.266 26.075 A 15.011 15.011 0 0 1 802.417 21.656 Q 805.518 20.02 809.18 20.02 L 812.696 20.02 L 812.696 26.709 Z M 58.936 70.996 L 52.93 70.996 L 52.93 20.996 L 58.936 20.996 L 58.936 70.996 Z M 333.985 57.618 L 333.985 34.375 Q 333.985 32.569 333.301 30.982 A 8.758 8.758 0 0 0 331.446 28.223 Q 330.274 27.051 328.687 26.368 Q 327.1 25.684 325.293 25.684 L 321.289 25.684 Q 319.483 25.684 317.896 26.368 A 8.758 8.758 0 0 0 315.137 28.223 Q 313.965 29.395 313.282 30.982 Q 312.598 32.569 312.598 34.375 L 312.598 57.618 Q 312.598 59.424 313.282 61.011 A 8.758 8.758 0 0 0 315.137 63.77 Q 316.309 64.942 317.896 65.625 Q 319.483 66.309 321.289 66.309 L 325.293 66.309 Q 327.1 66.309 328.687 65.625 A 8.758 8.758 0 0 0 331.446 63.77 Q 332.618 62.598 333.301 61.011 Q 333.985 59.424 333.985 57.618 Z M 683.155 57.618 L 683.155 34.375 Q 683.155 32.569 682.471 30.982 A 8.758 8.758 0 0 0 680.616 28.223 Q 679.444 27.051 677.857 26.368 Q 676.27 25.684 674.463 25.684 L 670.459 25.684 Q 668.653 25.684 667.066 26.368 A 8.758 8.758 0 0 0 664.307 28.223 Q 663.135 29.395 662.451 30.982 Q 661.768 32.569 661.768 34.375 L 661.768 57.618 Q 661.768 59.424 662.451 61.011 A 8.758 8.758 0 0 0 664.307 63.77 Q 665.479 64.942 667.066 65.625 Q 668.653 66.309 670.459 66.309 L 674.463 66.309 Q 676.27 66.309 677.857 65.625 A 8.758 8.758 0 0 0 680.616 63.77 Q 681.787 62.598 682.471 61.011 Q 683.155 59.424 683.155 57.618 Z M 728.565 57.618 L 728.565 34.375 Q 728.565 32.569 727.881 30.982 A 8.758 8.758 0 0 0 726.026 28.223 Q 724.854 27.051 723.267 26.368 Q 721.68 25.684 719.873 25.684 L 715.869 25.684 Q 714.063 25.684 712.476 26.368 A 8.758 8.758 0 0 0 709.717 28.223 Q 708.545 29.395 707.862 30.982 Q 707.178 32.569 707.178 34.375 L 707.178 57.618 Q 707.178 59.424 707.862 61.011 A 8.758 8.758 0 0 0 709.717 63.77 Q 710.889 64.942 712.476 65.625 Q 714.063 66.309 715.869 66.309 L 719.873 66.309 Q 721.68 66.309 723.267 65.625 A 8.758 8.758 0 0 0 726.026 63.77 Q 727.198 62.598 727.881 61.011 Q 728.565 59.424 728.565 57.618 Z M 146.778 38.819 L 146.778 34.375 Q 146.778 32.569 146.094 30.982 Q 145.41 29.395 144.214 28.223 A 9.058 9.058 0 0 0 141.431 26.368 Q 139.844 25.684 138.037 25.684 L 133.057 25.684 Q 131.25 25.684 129.663 26.368 A 8.758 8.758 0 0 0 126.905 28.223 Q 125.733 29.395 125.049 30.982 Q 124.366 32.569 124.366 34.375 L 124.366 38.819 Q 124.366 40.625 125.049 42.212 A 8.758 8.758 0 0 0 126.905 44.971 Q 128.076 46.143 129.663 46.827 Q 131.25 47.51 133.057 47.51 L 138.037 47.51 Q 139.844 47.51 141.431 46.827 A 9.058 9.058 0 0 0 144.214 44.971 A 8.558 8.558 0 0 0 146.094 42.212 Q 146.778 40.625 146.778 38.819 Z M 213.184 41.797 L 213.184 34.375 Q 213.184 32.569 212.5 30.982 A 8.758 8.758 0 0 0 210.645 28.223 Q 209.473 27.051 207.886 26.368 Q 206.299 25.684 204.493 25.684 L 200.489 25.684 Q 198.682 25.684 197.095 26.368 A 8.758 8.758 0 0 0 194.336 28.223 Q 193.164 29.395 192.481 30.982 Q 191.797 32.569 191.797 34.375 L 191.797 41.797 L 213.184 41.797 Z M 408.106 41.797 L 408.106 34.375 Q 408.106 32.569 407.422 30.982 A 8.758 8.758 0 0 0 405.567 28.223 Q 404.395 27.051 402.808 26.368 Q 401.221 25.684 399.414 25.684 L 395.41 25.684 Q 393.604 25.684 392.017 26.368 A 8.758 8.758 0 0 0 389.258 28.223 Q 388.086 29.395 387.403 30.982 Q 386.719 32.569 386.719 34.375 L 386.719 41.797 L 408.106 41.797 Z M 530.909 41.797 L 530.909 34.375 Q 530.909 32.569 530.225 30.982 A 8.758 8.758 0 0 0 528.369 28.223 Q 527.198 27.051 525.611 26.368 Q 524.024 25.684 522.217 25.684 L 518.213 25.684 Q 516.407 25.684 514.82 26.368 A 8.758 8.758 0 0 0 512.061 28.223 Q 510.889 29.395 510.205 30.982 Q 509.522 32.569 509.522 34.375 L 509.522 41.797 L 530.909 41.797 Z M 616.7 41.797 L 616.7 34.375 Q 616.7 32.569 616.016 30.982 A 8.758 8.758 0 0 0 614.16 28.223 Q 612.989 27.051 611.402 26.368 Q 609.815 25.684 608.008 25.684 L 604.004 25.684 Q 602.198 25.684 600.611 26.368 A 8.758 8.758 0 0 0 597.852 28.223 Q 596.68 29.395 595.996 30.982 Q 595.313 32.569 595.313 34.375 L 595.313 41.797 L 616.7 41.797 Z M 773.975 41.797 L 773.975 34.375 Q 773.975 32.569 773.291 30.982 A 8.758 8.758 0 0 0 771.436 28.223 Q 770.264 27.051 768.677 26.368 Q 767.09 25.684 765.284 25.684 L 761.28 25.684 Q 759.473 25.684 757.886 26.368 A 8.758 8.758 0 0 0 755.127 28.223 Q 753.955 29.395 753.272 30.982 Q 752.588 32.569 752.588 34.375 L 752.588 41.797 L 773.975 41.797 Z M 146.534 77.588 L 146.534 76.807 A 8.2 8.2 0 0 0 146.323 74.915 A 6.803 6.803 0 0 0 145.85 73.56 A 7.014 7.014 0 0 0 143.994 71.143 Q 142.823 70.166 141.236 69.629 A 10.352 10.352 0 0 0 138.304 69.101 A 11.878 11.878 0 0 0 137.842 69.092 L 134.766 69.092 A 10.787 10.787 0 0 0 132.103 69.413 A 9.789 9.789 0 0 0 131.372 69.629 A 8.975 8.975 0 0 0 129.468 70.524 A 7.875 7.875 0 0 0 128.614 71.143 Q 127.442 72.12 126.758 73.56 A 7.084 7.084 0 0 0 126.129 75.82 A 8.801 8.801 0 0 0 126.075 76.807 L 126.075 77.588 A 8.158 8.158 0 0 0 126.266 79.391 A 6.604 6.604 0 0 0 126.758 80.811 A 7.333 7.333 0 0 0 128.614 83.228 Q 129.785 84.229 131.372 84.766 A 10.352 10.352 0 0 0 134.304 85.294 A 11.878 11.878 0 0 0 134.766 85.303 L 137.842 85.303 A 10.787 10.787 0 0 0 140.505 84.982 A 9.789 9.789 0 0 0 141.236 84.766 A 8.61 8.61 0 0 0 143.262 83.781 A 7.714 7.714 0 0 0 143.994 83.228 A 7.333 7.333 0 0 0 145.85 80.811 A 6.85 6.85 0 0 0 146.467 78.679 A 8.669 8.669 0 0 0 146.534 77.588 Z M 829.2 0.977 L 824.219 22.51 L 821.68 22.51 L 821.68 0.977 L 829.2 0.977 Z M 59.424 8.985 L 52.442 8.985 L 52.442 0.977 L 59.424 0.977 L 59.424 8.985 Z" vector-effect="non-scaling-stroke" 
                  fill="#222"
                  stroke="#222"
                />
              </svg>
            </Link>
            <button
              onClick={toggleTheme}
              className={
                theme === "light" ? "header-theme dark" : "header-theme light"
              }
            >
              {theme === "light" ? (
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Pramod</title>{" "}
                    <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z"
                      stroke="#000000"
                    ></path>{" "}
                    <path
                      d="M12 3.5V5.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M20.5 12H18.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M5.5 12H3.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12 18.5V20.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 7.5L18 6"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 18L7.5 16.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 6L7.5 7.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 16.5L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </header>
          <Nav />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
