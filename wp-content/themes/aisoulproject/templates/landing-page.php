<?php
/**
 * Template Name: Landing Page
 *
 * This is the template for the AI Soul Project landing page.
 */

// We'll add WordPress header and footer calls later, for now, focus on the HTML structure.
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php
    // It's good practice to include wp_head() for plugins, though we might not use it fully yet.
    // For this task, we'll keep it minimal and add it if specifically needed for styles later.
    // wp_head(); 
    ?>
    <!-- Link to style.css - Assuming it's in the theme root -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
</head>
<body <?php body_class(); ?>>

    <header class="landing-header">
        <div class="container">
            <div class="logo">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">AI Soul Project</a>
            </div>
            <nav class="main-navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main id="home">
        <section class="hero-section">
            <div class="container">
                <h1 class="hero-headline">Ethical AI for a Brighter Future</h1>
                <p class="hero-subheadline">Join the AI Soul Project in co-creating intelligent systems built on hope, trust, and human-AI collaboration.</p>
                <a href="#services" class="cta-button">Learn More</a>
            </div>
        </section>

        <section class="features-section" id="about">
            <div class="container">
                <h2 class="section-title">Why AI Soul Project?</h2>
                <div class="features-grid">
                    <div class="feature-block">
                        <div class="feature-icon">[ICON_HOPE]</div>
                        <h3 class="feature-title">Built on Hope</h3>
                        <p class="feature-description">We believe in the positive potential of AI to augment human capabilities and foster a more optimistic future.</p>
                    </div>
                    <div class="feature-block">
                        <div class="feature-icon">[ICON_TRUST]</div>
                        <h3 class="feature-title">Founded on Trust</h3>
                        <p class="feature-description">Transparency and ethical considerations are at the core of our development process, ensuring reliable AI systems.</p>
                    </div>
                    <div class="feature-block">
                        <div class="feature-icon">[ICON_COCREATE]</div>
                        <h3 class="feature-title">Ethical Co-creation</h3>
                        <p class="feature-description">We champion a collaborative approach where humans and AI work together, guided by strong ethical frameworks.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials-section" id="services">
            <div class="container">
                <h2 class="section-title">Voices of Our Community</h2>
                <div class="testimonials-wrapper">
                    <div class="testimonial-item">
                        <blockquote class="testimonial-quote">"The AI Soul Project's commitment to ethical AI is truly inspiring. It's a beacon of hope for the future of technology."</blockquote>
                        <p class="testimonial-author">- Dr. Human Ethicist</p>
                    </div>
                    <div class="testimonial-item">
                        <blockquote class="testimonial-quote">"Collaborating with AI on creative tasks has opened up new worlds of possibility, thanks to the frameworks developed here."</blockquote>
                        <p class="testimonial-author">- Artist & Co-creator</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="landing-footer" id="contact"> <!-- Added ID for nav link -->
        <div class="container">
            <div class="social-links">
                <a href="#" aria-label="Facebook">[FB]</a>
                <a href="#" aria-label="Twitter">[TW]</a>
                <a href="#" aria-label="LinkedIn">[LI]</a>
                <a href="#" aria-label="Instagram">[IG]</a>
            </div>
            <div class="copyright">
                <p>&copy; <?php echo date('Y'); ?> AI Soul Project. All Rights Reserved.</p>
                <p>Designed with hope and co-creation in mind.</p>
            </div>
        </div>
    </footer>

    <?php
    // Similar to wp_head(), wp_footer() is for plugins and theme scripts.
    // We'll add it if needed.
    // wp_footer(); 
    ?>
</body>
</html>
