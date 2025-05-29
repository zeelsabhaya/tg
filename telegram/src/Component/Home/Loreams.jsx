import React, { useState } from 'react';

const Loreams = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMoreText = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="max-w-[450px] mx-auto p-4 border rounded-lg shadow-md bg-white dark:bg-gray-900 hidden sm:block">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Equity + F&amp;O</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Weekly 0-5 Equity Tips for Swing Trades</li>
                <li>Longterm Equity Tips For Wealth Creation</li>
                <li>Exclusive Wealth Creation Module</li>
                <li>Daily Market News &amp; Exclusive Market Analysis</li>
                <li>Some Exclusive Research Reports</li>
                <li>Priority Chat Available with me even in market hours too</li>
                {expanded && (
                    <>
                        <li>Daily 0-5 Options Calls (All Index)</li>
                        <li>Options Buying</li>
                        <li>Exclusive Intraday News &amp; Research</li>
                        <li>Option Buying Setup</li>
                        <li>Live chat with me in Market hours too...</li>
                        <li>
                            <strong>Disclaimer:</strong>{' '}
                            <a
                                href="/"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                https://index-expert.in/disclaimer
                            </a>
                        </li>
                        <li className="text-red-500 font-medium">
                            Note: FEES ARE 100% non refundable.
                        </li>
                        <li className="text-sm text-gray-600 dark:text-gray-400">
                            We reserve right to cancel membership before duration or we also reserve right to change duration of membership. Any type of bad words/spam/abusive language used by members is not allowed &amp; we cancel your membership or terminate it without any refund.
                        </li>
                    </>
                )}
            </ul>
            <button
                onClick={toggleMoreText}
                className="mt-4 text-blue-600 dark:text-blue-400 underline"
            >
                {expanded ? 'Read less' : 'Read more'}
            </button>
        </div>
    );
};

export default Loreams;
