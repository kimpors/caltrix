"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UrlChangeListener() {
  const router = useRouter();

	console.log(router);

  return <></>;
}
