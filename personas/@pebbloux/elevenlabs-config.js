// ElevenLabs API 설정 파일
// 실제 사용 시 이 파일의 API 키를 본인의 ElevenLabs API 키로 교체하세요

const ELEVENLABS_CONFIG = {
  // ElevenLabs API 키 (https://elevenlabs.io에서 발급)
  API_KEY: 'sk_82e5a6661ba4fc783eebde024664b818b225785cd8950b49',

  // API 기본 URL
  BASE_URL: 'https://api.elevenlabs.io/v1',

  // 대화 ID 목록 (순차적으로 재생/병합될 대화들)
  CONVERSATION_IDS: [
    'conv_0101kdhw6v6zebhsfvjyww5s77zj',
    'conv_4001kdhwa8nhe8qbteatc1madhad',
    'conv_9701kdhwf2ape449933zakch9zj1',
    'conv_7301kdhwj7hmesj8p8da3edaky8m',
    'conv_7201kdhwt9xhfs6tcsz6ya0q5x0s',
    'conv_3401kdhwxwabesmrp6qsrw7t1sr2',
    'conv_6001kdhx18p7fvbse0c1wfqv1ba7'
  ],

  // 에이전트 ID (ElevenLabs ConvAI 에이전트)
  AGENT_ID: 'agent_2601kdded8cyf22src6tcas17zba',

  // CORS 프록시 설정 (필요시 활성화)
  USE_PROXY: false,
  PROXY_URL: 'http://localhost:3001/api/elevenlabs',

  // 음성 설정
  VOICE_SETTINGS: {
    stability: 0.5,
    similarity_boost: 0.8,
    style: 0.0,
    use_speaker_boost: true
  },

  // 지원되는 오디오 형식
  SUPPORTED_FORMATS: ['mp3', 'wav', 'mpeg'],

  // 기본 언어 설정 (한국어)
  DEFAULT_LANGUAGE: 'ko',

  // 에러 메시지
  ERROR_MESSAGES: {
    API_KEY_MISSING: 'ElevenLabs API 키가 설정되지 않았습니다.',
    CONVERSATION_NOT_FOUND: '대화를 찾을 수 없습니다.',
    AUDIO_LOAD_FAILED: '오디오를 불러오는데 실패했습니다.',
    TRANSCRIPT_LOAD_FAILED: '트랜스크립트를 불러오는데 실패했습니다.',
    NETWORK_ERROR: '네트워크 오류가 발생했습니다.'
  }
};

// 설정 유효성 검사
function validateConfig() {
  const errors = [];

  if (ELEVENLABS_CONFIG.API_KEY === 'YOUR_ELEVENLABS_API_KEY') {
    errors.push('API 키를 설정해주세요.');
  }

  if (ELEVENLABS_CONFIG.CONVERSATION_ID === 'YOUR_CONVERSATION_ID' || ELEVENLABS_CONFIG.CONVERSATION_ID === '') {
    // 대화 ID가 비어있어도 허용 (아직 녹음된 대화가 없는 경우)
  }

  return errors;
}

// 설정 내보내기
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ELEVENLABS_CONFIG, validateConfig };
} else {
  window.ELEVENLABS_CONFIG = ELEVENLABS_CONFIG;
  window.validateConfig = validateConfig;
}
