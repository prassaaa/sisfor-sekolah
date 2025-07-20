import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAppearance } from '@/hooks/use-appearance';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const { appearance, updateAppearance } = useAppearance();

    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [featuresRef, featuresInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Get current theme state
    const isDarkMode = appearance === 'dark' || (appearance === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleDarkMode = () => {
        const newMode = isDarkMode ? 'light' : 'dark';
        updateAppearance(newMode);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const floatingAnimation = {
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <>
            <Head title="Selamat Datang - SISFOR Sekolah">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
                <link rel="icon" type="image/png" href="/assets/images/Tutwurihandayani.png" />
                <link rel="shortcut icon" type="image/png" href="/assets/images/Tutwurihandayani.png" />
                <link rel="apple-touch-icon" href="/assets/images/Tutwurihandayani.png" />
                <meta name="description" content="Sistem Informasi Manajemen Sekolah SMA - Platform digital untuk mengelola administrasi sekolah dengan mudah dan efisien" />
            </Head>

            {/* Background with gradient */}
            <motion.div
                className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-blue-800"
                        animate={floatingAnimation}
                    />
                    <motion.div
                        className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-indigo-800"
                        animate={{
                            ...floatingAnimation,
                            transition: { ...floatingAnimation.transition, delay: 2 }
                        }}
                    />
                    <motion.div
                        className="absolute top-40 left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:bg-cyan-800"
                        animate={{
                            ...floatingAnimation,
                            transition: { ...floatingAnimation.transition, delay: 4 }
                        }}
                    />
                </div>

                {/* Navigation */}
                <motion.nav
                    className="relative z-10 flex items-center justify-between p-6 lg:px-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src="/assets/images/Tutwurihandayani.png"
                            alt="Tutwurihandayani Logo"
                            className="w-10 h-10 object-contain filter drop-shadow-sm"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">SISFOR Sekolah</h1>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Sistem Informasi Manajemen</p>
                        </div>
                    </motion.div>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <div className="relative group">
                            <motion.button
                                onClick={toggleDarkMode}
                                className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        rotate: isDarkMode ? 180 : 0,
                                        scale: isDarkMode ? 1.1 : 1
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {isDarkMode ? (
                                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </motion.div>
                            </motion.button>

                            {/* Tooltip */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                            </div>
                        </div>

                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </motion.nav>

                {/* Main Content */}
                <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-4 h-[calc(100vh-80px)]" ref={heroRef}>
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid lg:grid-cols-2 gap-8 items-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                        >
                            {/* Left Content */}
                            <motion.div
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                {/* Hero Badge */}
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Tutwurihandayani - Memimpin dari Depan
                                </div>

                                {/* Main Heading */}
                                <div className="space-y-3">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                        Sistem Informasi
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                            Manajemen Sekolah
                                        </span>
                                    </h1>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                                        Platform digital terdepan untuk mengelola administrasi sekolah SMA dengan mudah, efisien, dan terintegrasi.
                                        Wujudkan visi pendidikan yang lebih baik dengan teknologi modern.
                                    </p>
                                </div>

                                {/* Key Benefits */}
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    variants={containerVariants}
                                    ref={featuresRef}
                                    initial="hidden"
                                    animate={featuresInView ? "visible" : "hidden"}
                                >
                                    <motion.div
                                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200/50 dark:border-blue-700/50"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Efisiensi Maksimal</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Otomatisasi proses administrasi sekolah menghemat waktu hingga 70% dan mengurangi kesalahan manual
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200/50 dark:border-green-700/50"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Keamanan Terjamin</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Data sekolah dilindungi dengan enkripsi tingkat enterprise dan sistem backup otomatis harian
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>


                            </motion.div>

                            {/* Right Content - Teacher Image */}
                            <motion.div
                                className="relative"
                                variants={itemVariants}
                            >
                                <div className="relative w-full max-w-lg mx-auto">
                                    {/* Teacher Image Container */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <img
                                            src="/assets/images/Teacher.png"
                                            alt="Professional Teacher - SISFOR Sekolah"
                                            className="w-full h-auto object-contain filter drop-shadow-2xl"
                                        />

                                        {/* Decorative Background Circle */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-full blur-3xl -z-10"></div>
                                    </motion.div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg opacity-80 flex items-center justify-center"
                                        animate={{
                                            y: [-5, 5, -5],
                                            rotate: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </motion.div>

                                    <motion.div
                                        className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg opacity-80 flex items-center justify-center"
                                        animate={{
                                            y: [5, -5, 5],
                                            rotate: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </motion.div>

                                    <motion.div
                                        className="absolute top-1/4 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg opacity-70 flex items-center justify-center"
                                        animate={{
                                            x: [-3, 3, -3],
                                            y: [-2, 2, -2],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            className="flex justify-center mt-6 lg:col-span-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <motion.div
                                className="flex flex-col items-center space-y-2 cursor-pointer group"
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                onClick={() => {
                                    const aboutSection = document.querySelector('#about-section');
                                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {/* Mouse Icon */}
                                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full relative group-hover:border-blue-500 transition-colors duration-300">
                                    <motion.div
                                        className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors duration-300"
                                        animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>

                                {/* Text */}
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-blue-500 transition-colors duration-300">
                                    Scroll Down
                                </span>

                                {/* Arrow */}
                                <motion.svg
                                    className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.2
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </motion.svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </main>

                {/* About Section */}
                <section id="about-section" className="relative z-10 py-20 px-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Tentang SISFOR Sekolah
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Sistem informasi terpadu yang dirancang khusus untuk memenuhi kebutuhan administrasi
                                dan manajemen sekolah menengah atas di era digital.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Terintegrasi & Terpusat
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Semua data sekolah dalam satu platform yang terintegrasi, mulai dari data siswa,
                                            guru, hingga administrasi keuangan.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Efisien & Otomatis
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Otomatisasi proses administrasi yang menghemat waktu dan mengurangi kesalahan manual
                                            dalam pengelolaan data sekolah.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Aman & Terpercaya
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Keamanan data terjamin dengan enkripsi tingkat enterprise dan backup otomatis
                                            untuk melindungi informasi penting sekolah.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Sekolah Terdaftar</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Siswa Aktif</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5K+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Guru Terdaftar</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime System</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="relative z-10 py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Sistem Manajemen Sekolah Terlengkap
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                                Platform terintegrasi dengan 12+ modul master data untuk mengelola seluruh aspek administrasi sekolah
                                dari akademik hingga operasional dengan efisien dan akurat.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Manajemen Akademik */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Manajemen Akademik
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Siswa
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Guru
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Kelas
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Jurusan
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Kurikulum & Pembelajaran */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Kurikulum & Pembelajaran
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Pelajaran
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Kurikulum
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Jadwal Mengajar
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Sistem Penilaian
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Manajemen Operasional */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Manajemen Operasional
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Inventori
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Master Data Vendor
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Manajemen Pengumuman
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Sistem Pelaporan
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Monitoring & Evaluasi */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Monitoring & Evaluasi
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Data Pelanggaran Siswa
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Data Prestasi Siswa
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Analisis Kinerja
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Dashboard Analitik
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Dipercaya oleh Sekolah Terbaik
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Testimoni dari kepala sekolah dan guru yang telah merasakan manfaat SISFOR Sekolah.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    "SISFOR Sekolah benar-benar mengubah cara kami mengelola administrasi. Semua data tersentralisasi
                                    dan mudah diakses. Efisiensi kerja meningkat drastis!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-600 dark:text-blue-400 font-semibold">DR</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Dra. Siti Rahayu</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Kepala Sekolah SMA Negeri 1</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    "Sistem penilaian yang otomatis sangat membantu. Tidak perlu lagi menghitung manual,
                                    dan laporan bisa langsung dicetak. Sangat praktis!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 dark:text-green-400 font-semibold">AB</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Ahmad Budiman, S.Pd</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Guru Matematika</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    "Interface yang user-friendly membuat staff administrasi mudah beradaptasi.
                                    Support team juga sangat responsif membantu."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-purple-600 dark:text-purple-400 font-semibold">LM</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">Lisa Marlina</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Staff Administrasi</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="relative z-10 py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            {/* Company Info */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <img
                                        src="/assets/images/Tutwurihandayani.png"
                                        alt="Tutwurihandayani Logo"
                                        className="w-8 h-8 object-contain"
                                    />
                                    <span className="font-bold text-gray-900 dark:text-white">SISFOR Sekolah</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Platform digital untuk mengelola administrasi sekolah dengan mudah dan efisien.
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Fitur Utama</h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li>Manajemen Siswa</li>
                                    <li>Sistem Penilaian</li>
                                    <li>Absensi Digital</li>
                                    <li>Laporan Akademik</li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Dukungan</h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li>Panduan Pengguna</li>
                                    <li>Tutorial Video</li>
                                    <li>FAQ</li>
                                    <li>Kontak Support</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Kontak</h3>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <p>Email: info@sisfor-sekolah.id</p>
                                    <p>Telepon: (021) 123-4567</p>
                                    <p>Alamat: Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                © {new Date().getFullYear()} SISFOR Sekolah. Tutwurihandayani - Memimpin dari Depan.
                            </p>
                        </div>
                    </div>
                </footer>
            </motion.div>
        </>
    );
}
