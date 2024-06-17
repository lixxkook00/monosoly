import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { close } from '../../../contexts/modal-slice';
import { changeLanguage } from '../../../contexts/user-slice';

interface Language {
  code: string;
  imgSrc: string;
}

const LanguagePopup: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(close('languageModal'));
    dispatch(changeLanguage(lng))
  };

  const languages: Language[] = [
    { code: 'en', imgSrc: '/images/ic-en.png' },
    { code: 'vi', imgSrc: '/images/ic-vn.png' },
  ];

  return (
    <div className="p-6 pt-10">
      {languages.map((lang) => (
        <div
          key={lang.code}
          className="w-full flex items-center justify-between border-slate-700 border-b"
          onClick={() => handleChangeLanguage(lang.code)}
        >
          <div className="text-lg font-semibold mt-4 pb-3">
            {t(lang.code)}
          </div>
          <img className="w-9 object-contain" src={lang.imgSrc} alt={t(lang.code)} />
        </div>
      ))}
    </div>
  );
};

export default LanguagePopup;
