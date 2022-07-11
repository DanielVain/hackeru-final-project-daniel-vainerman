import PageHeader from '../common/pageHeader';

const About = () => {
	return (
		<div className="container">
			<PageHeader title="About Us" />

			<div className="row">
				<div className="col-12 col-md-8  text-light">
					<div className="col-10">
						<h3>Introduction</h3>
						<p>
							We at Headliner Music believe in creation and streaming of
							original music. We want to inspire you people to create and share
							the sound your mind thought of, share the story behind those
							thoughts, and make us believe and feel your feeling through the
							music you share with us!.
						</p>
						<h3>How To Use Headliner Music?</h3>
						<p>
							First, come the registration process, that takes about 15 seconds.
							Put in your username, email and password and voila, you're in.
							Then you can go to the plus icon on the top right of your screen
							(Next to the big red logout button) and add a new song to the
							site. Afterwards go to your library (The icon right beside the
							plus icon) and see the song you created added to your library.
							That is not all, if you go to the browse page you will also see
							your song at the bottom of the list! isn't that amazing?! <br />
							And that is all you have to do to register and use our website,
							easy as that.
						</p>
						<h3>Who Are We?</h3>
						<p>
							Hi! My name is Daniel Vainerman, Im 22 years old, Im a Full Stack
							Developer from Israel. Im a huge music enthusiast, and i just love
							making and listening to music. This is why I have created this
							website, so people like us learn about new music and listen to it.
						</p>
					</div>
				</div>

				<div className="col-12 col-md-4 center">
					<img className="img-fluid" src="/images/songPic.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
