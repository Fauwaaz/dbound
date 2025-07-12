import React from 'react'

const CtaBeforeFooter = () => {
    return (
        <section className='pb-[50px]'>
            <div className='gridContainer'>
                <div className='flex flex-col text-left justify-center py-20 cta-1'>
                    <h2 className='text-2xl md:text-7xl font-bold mb-4'>Ready to Elevate Your Brand?</h2>
                    <p className='text-lg md:text-xl mb-6 text-gray-600'>Let's create something extraordinary together.</p>
                </div>
                <div className='cta-2 flex items-center justify-center relative'>
                   <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-full w-3/4 object-cover"
                        >
                            <source src="https://cdn.yourcreative.com.au/wp-content/uploads/2025/06/19093145/YC-4-5-Ratio-8K-Cut-1_1.mp4" type="video/mp4" />
                        </video>
                </div>
            </div>
        </section>
    )
}

export default CtaBeforeFooter