export default async function handler(req, res) {
  // 요청된 경로 가져오기
  const { path } = req.query;
  const targetUrl = `https://ytviewcount.kro.kr/api/${
    path ? path.join("/") : ""
  }`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers, // 클라이언트에서 받은 헤더를 그대로 전달
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    // 백엔드 응답 변환 후 프론트로 전달
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Proxy request failed" });
  }
}
