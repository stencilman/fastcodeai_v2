"use client";
import React, { useEffect, useState } from "react";
import Shadow from "../Shadow";
import Image from "next/image";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const Team = () => {
  const team = [
    { Image: "/team/Arjun_Jain.webp" },
    { Image: "/team/abdul.png" },
    { Image: "/team/dhruv1.webp" },
    { Image: "/team/parth-bw.webp" },
    { Image: "/team/eshwar.webp" },
    { Image: "/team/Sanjay.webp" },
    { Image: "/team/Dhaval.webp" },
    { Image: "/team/Sughosh.webp" },
    { Image: "/team/Shreyas.webp" },
  ];

  // const anim = " border  border-[#ffffffcc]";

  useEffect(() => {
    // animation of team avatars
    $(() => {
      const $teamAvas = $("[data-team-avas]");
      const $teamAssets = $("[data-team-assets] img");

      setInterval(() => {
        const $hiddenImages = $teamAvas.find(".team_circle > img.opacity-0");
        const $visibleImages = $teamAvas.find(
          ".team_circle > img:not(.opacity-0)"
        );
        const uniqueSrcs = $visibleImages
          .map(function () {
            return $(this).attr("src");
          })
          .toArray();

        let randomAssetIndex;

        do {
          randomAssetIndex = Math.floor(Math.random() * $teamAssets.length);
        } while (
          uniqueSrcs.includes($teamAssets.eq(randomAssetIndex).attr("src"))
        );

        const $randomAsset = $teamAssets.eq(randomAssetIndex);
        const randomHiddenAvaIndex = Math.floor(
          Math.random() * $hiddenImages.length
        );
        const randomVisibleAvaIndex = Math.floor(
          Math.random() * $visibleImages.length
        );

        const $randomHiddenAva = $hiddenImages.eq(randomHiddenAvaIndex);
        const $randomVisibleAva = $visibleImages.eq(randomVisibleAvaIndex);
        const assetSrc = $randomAsset.attr("src");

        $randomHiddenAva
          .attr("src", assetSrc)
          .removeClass("opacity-0")
          .addClass("transition-opacity")
          .parent()
          .addClass("transition-all");
        $randomVisibleAva
          .not($randomHiddenAva)
          .addClass("opacity-0")
          .removeClass("transition-opacity")
          .parent()
          .removeClass("transition-all");
      }, 2000);
    });
  }, []);
  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#000E32] to-[#000929] opacity-83 relative flex flex-col items-center justify-center z-[4]">
      {/* <Shadow /> */}

      <div className="flex gap-[0px] w-full items-center z-[3]">
        <div className=" pl-[100px] w-[45%] ">
          <h1 className="text-[51px] text-white">Our Team</h1>
          <p className="text-[#9EB3CF] w-[80%] text-[19px] font-light ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
          <button className="rounded-[28px] mt-[50px]  flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white p-[15px] text-lg ">
            <div>Get Started</div>
            <div>
              <Image
                className="inline "
                src="/arrowRight.svg"
                alt="arrow"
                width="16"
                height="13"
              />
            </div>
          </button>
        </div>

        <div className="columns__col mod--team is-2 w-[55%] h-full pr-[127px]">
          <div
            data-team-avas=""
            className="team_grid flex flex-wrap justify-end"
          >
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full  w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier "
                  src="/team/Arjun_Jain.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier opacity-0"
                  src="/team/abdul.png"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle  rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier "
                  src="/team/darshan.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle  rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier opacity-0"
                  src="/team/Dhaval.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier opacity-0"
                  src="/team/dhruv1.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier "
                  src="/team/eshwar.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier "
                  src="/team/gautam.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier opacity-0"
                  src="/team/Jadhav.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier"
                  src="/team/Nanda.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier opacity-0"
                  src="/team/parth-bw.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
            <div className="team__grid-block p-4 ">
              <div className="team_circle rounded-full w-[7.5rem] h-[7.5rem] transition-all duration-1000 relative overflow-hidden border border-[#ffffffcc]">
                <Image
                  className="transform-style-preserve-3d w-full transition-opacity duration-1000  ease-cubic-bezier"
                  src="/team/Prabal.webp"
                  width="120"
                  height="120"
                  alt="team"
                />
              </div>
            </div>
          </div>
          <div data-team-assets="" className="team__assets-avas hide hidden">
            <Image
              src="/team/Arjun_Jain.webp"
              loading="eager"
              alt="Arjun Jain"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/abdul.png"
              loading="eager"
              alt="Abdul team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/darshan.webp"
              loading="eager"
              alt="Darshan team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Dhaval.webp"
              loading="eager"
              alt="Dhaval team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/dhruv1.webp"
              loading="eager"
              alt="Dhruv team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/eshwar.webp"
              loading="eager"
              alt="Eshwar team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            {/* <Image
              src="/team/gautham.webp"
              loading="eager"
              alt="Gautham team member"
              className="team__assets-ava"
              width="120"
              height="120"
            /> */}
            <Image
              src="/team/Jadhav.webp"
              loading="eager"
              alt="Jadhav team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Jadhav.webp"
              loading="eager"
              alt="Jadhav team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Nanda.webp"
              loading="eager"
              alt="Nanda team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/parth-bw.webp"
              loading="eager"
              alt="Parth team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Prabal.webp"
              loading="eager"
              alt="Prabal team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Sanjay.webp"
              loading="eager"
              alt="Sanjay team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Shreyas.webp"
              loading="eager"
              alt="Shreyas team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Sughosh.webp"
              loading="eager"
              alt="Sughosh team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
            <Image
              src="/team/Tirth.webp"
              loading="eager"
              alt="Tirth team member"
              className="team__assets-ava"
              width="120"
              height="120"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
