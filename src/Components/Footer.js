import '../CSS/Footer.css'

function Footer({acts, checkedActs}) {
    if (!acts || acts.length === 0) {
        return null;
    }
    let actsCount = acts.length;
    let completedActs = checkedActs.length;
    let percentage = actsCount > 0 ? Math.round((completedActs / actsCount) * 100) : 0;
    return (
        <div>
            <div className="footer-card">
                <p> You have {actsCount} activities in your list, and you have completed {completedActs}, which is {percentage}%. Keep up the good work! </p>
            </div> 
        </div>
    );
}

export default Footer;