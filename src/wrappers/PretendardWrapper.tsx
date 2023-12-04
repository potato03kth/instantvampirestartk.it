'use client';

import { useServerInsertedHTML } from 'next/navigation';
import 'pretendard/dist/web/static/pretendard.css';
import React from 'react';

const PretendardWrapper = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => (
    <style
      id="__use_pretendard"
      dangerouslySetInnerHTML={{
        __html: `*, html, body, input {
                font-family: 'Pretendard', sans-serif;
            }
            
            html[lang=ko] {
                word-break: keep-all;
                white-space: keep-all;
            }`,
      }}
    />
  ));

  return children;
};

export default PretendardWrapper;
