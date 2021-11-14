import { useState, useEffect } from 'react';import { unstable_batchedUpdates } from 'react-dom';
export default function Home() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            unstable_batchedUpdates(() => {
                // 只更新一次数据
                setUserInfo({});
                setLoading(false);
            });
        }, 3000);
    }, []);

    console.log('render');
    return null;
}