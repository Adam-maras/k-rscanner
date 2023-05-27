import { Inter } from 'next/font/google'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useState, useEffect, useRef } from 'react'
import Router from "next/router";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [scanResult, setScanResult] = useState(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 400,
        height: 400,
      },
      fps: 10,
    });

    const success = (result) => {
      scanner.clear();
      setScanResult(result);
      console.log(result);
    };

    const error = (err) => {
      console.warn(err);
    };

    scannerRef.current = scanner;
    scanner.render(success, error);

    return () => {
      scannerRef.current?.clear();
    };
  }, []);


  const restartCamera = () => {
    Router.reload();
  };

  return (
    <div className="h-[50%] w-[50%]">
<div className="">
          Success: {scanResult}{" "}
          <button className="bg-green" onClick={restartCamera}>
            Let enter
          </button>{" "}
        </div>
      
      <div className="" id="reader" />
    </div>
  );
}

