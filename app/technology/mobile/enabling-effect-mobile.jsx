import React from "react";
import EnablingEffective from "../desktop/enabling-effective";
import { nunito_sans } from "@/typography/font";

function EnablingEffectiveMobile(props) {
  return (
    <form className="items-stretch center-section bg-white md:hidden flex max-w-[480px] w-full flex-col mx-auto px-5 py-10">
      <h4 className="text-primary text-center text-3xl font-bold leading-10">
        Enabling Effective Communication across Industries
      </h4>
      <p className = {`text-black text-center text-base leading-6 text-center ${nunito_sans.className} mt-5`}>
        Dedicated to dismantling language barriers, IndiaSpeaks facilitates seamless communication
        across a spectrum of industries. With our technology, we ensure clarity and precision,
        ensuring every voice is not just heard but truly understood.
      </p>
      <div className="justify-center items-center flex flex-col mt-12 px-4 py-4">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">
          Entertainment
        </h4>
        <p className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}>
          Revolutionizing the Entertainment Industry with Voice Technology Solutions
        </p>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81cf4cecd76a1e5129bc1eee6b5ed422f41fc7a15dbe411464becd4e52788b6e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"className="aspect-[1.41] object-contain object-center w-full overflow-hidden self-stretch mt-1"
          alt=""
        />
      </div>
      <div className="justify-center items-center flex flex-col px-4 py-8">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">
          Journalism
        </h4>
        <p className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}>
          Transforming Journalism with Cutting-Edge Voice Technology Solutions
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97f7e89bb25d7326022c6976982485088b5df9b3ab6d863ea126366159f8fa6a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.5] object-contain object-center w-full overflow-hidden self-stretch mt-1"
          alt=""
        />
      </div>
      <div className="justify-center items-center flex flex-col px-4 py-9">
        <h4 className="text-primary text-2xl font-bold leading-8 whitespace-nowrap">Marketing</h4>
        <p className={`self-stretch text-black text-center text-base leading-6 ${nunito_sans.className} mt-1`}>
          Empowering Marketing Activities with Advanced Voice Technology Solutions
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/834af77fba65bb92cb3746a699160b455c9131eed5c48413ce30fa1f86eb6da5?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.93] object-contain object-center w-full overflow-hidden self-stretch mt-7"
          alt=""
        />
      </div>
    </form>
  );
}

export default EnablingEffectiveMobile;