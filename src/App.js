import './App.css';
import Hero from './images/illustration-hero.svg';
import MusicIcon from './images/icon-music.svg';

function App() {
	return (
		<main className="App">
			<div className="order-summary-component">
				<div className="order-summary-component-image">
					<img src={Hero} alt="illustration hero" />
				</div>
				<div className="order-summary-details">
					<h2 className="osd-title">Order Summary</h2>
					<p className="osd-desc">
						You can listen to million of songs, audiobooks, and podcasts on any device anywhere you like!
					</p>
					<div className="osd-plan-change">
						<div className="osd-plan-change-left">
							<img src={MusicIcon} alt="Music Icon" />
							<div className="osd-plan-change-plans">
								{/* <span className="osd-plan-change-plans-title">Annual Plan</span> <br />
								<span className="osd-plan-change-plans-price">$55.99/year</span> */}
								<h3 className="osd-plan-change-plans-title">Annual Plan</h3>
								<h6 className="osd-plan-change-plans-price">$55.99/year</h6>
							</div>
						</div>
						<div className="osd-plan-change-right">
							<a href="/">Change</a>
						</div>
					</div>

					<div className="osd-payment-button">Proceed to Payment</div>
					<div className="osd-cancel-button">Cancel Order</div>
				</div>
			</div>
		</main>
	);
}

export default App;
