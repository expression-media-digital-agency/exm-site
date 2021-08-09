import './NeedSolution.scss'
import Link from 'next/link'
const NeedSolution = () => (
    <section className="section-solution">
    <div className="container">
        <div className="row">
            
            {/* <div className="col-sm-4 text-center">
                <img src="/static/img/svg/anita.svg" alt="anita picture" className="img-fluid"/>
            </div> */}
            <div className="col-sm-8">
                <h3 className="heading-three"></h3> {/* Hi! I’m Anita.</h3> */}
                <h1  className="heading-one">Do you want to discuss Building Your Marketing Team?</h1>
                <h2 className="heading-two">Get Started right away!</h2>
                <p className="paragraph-one mb-5">All it takes is to click the button.</p>
                <Link href="/contact">
                    <a className="solution-btn hvr-grow-shadow">
                        Send Message
                    </a>
                </Link>
            </div>
        </div>
    </div>
</section>
  );

  export default NeedSolution;
