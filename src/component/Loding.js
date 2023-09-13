import Spinner from '../gif/loading.gif';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loadingText">잠시만 기다려 주세요</div>
            <img src={Spinner} alt="로딩중" width="5%" />
        </div>
    )
}