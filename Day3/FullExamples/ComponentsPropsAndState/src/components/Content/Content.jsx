import React from "react";
import { MovieCard } from "./MovieCardHooks/MovieCard";
import { ClickCounter } from "./ClickCounter/ClickCounter";
import { ExpandableBox } from "./ExpandableBox/ExpandableBox";
import { CheckboxList } from "./CheckBoxList/CheckBoxList";

import "./Content.css";
import { Tabs } from "./Tabs/Tabs";

export const Content = () => {
  return (
    <div className="content">
      <MovieCard
        title="The Shawshank Redemption"
        description="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        imgUrl="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        imdbLink="https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=NVMKCZ4PJ9D1Z4V2SXFW&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=tt_mv_close"
        rottenTomatoLink="https://www.rottentomatoes.com/m/shawshank_redemption"
      />
      <ClickCounter />
      <ExpandableBox
        label="This is the label"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <CheckboxList />
      <Tabs tabItems={["paragraph", "input"]}>
        <p>This is first tab</p>
        <input placeholder="This is second tab" />
      </Tabs>
    </div>
  );
};
