    // en applicant cette méthode, la propriété created deviendra une propriété calculée
    const formatDate = (date: Date): string => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    export default formatDate;