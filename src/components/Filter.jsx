import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { applyFilters } from '../redux/action';

const options = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5+' },
];

const companyNames = ["LG", "Sony", "Adobe Systems", "HP", "eBay", "Tencent", "Apple", "Asus", "Intel Corporation", "Rakuten", "Samsung", "Dell Technologies", "Dropbox", "Cisco", "Oracle", "Baidu", "Amazon", "Olympus", "Alibaba", "GoPro", "Twitter", "ZTE", "Netflix", "MasterCard", "Facebook", "IBM", "Intel", "Google", "Huawei", "Adobe", "Pandora", "Nikon", "Lyft", "Spotify", "PayPal", "Visa", "Adobe Inc.", "Sharp", "Qualcomm", "Yahoo", "Panasonic", "Xiaomi", "Microsoft", "Tesla", "Epson", "Airbnb", "Canon", "Vimeo", "Uber", "LinkedIn"
];

const locations = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'remote', label: 'Remote' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'delhi ncr', label: 'Delhi NCR' },
    { value: 'bangalore', label: 'Bangalore' },
];

const roles = [
    { value: 'ios', label: 'iOS' },
    { value: 'android', label: 'Android' },
    { value: 'tech lead', label: 'Tech Lead' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
];

const salaries = [
    { value: '5', label: '5K' },
    { value: '10', label: '10K' },
    { value: '20', label: '20K' },
    { value: '30', label: '30K' },
    { value: '40', label: '40K' },
    { value: '50', label: '50K' },
    { value: '60', label: '60K' },
    { value: '70', label: '70K' },
    { value: '80', label: '80K' },
    { value: '90', label: '90K' },
    { value: '100', label: '100K' },
];

const Filter = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        minExperience: null,
        companyNames: null,
        locations: null,
        remoteOnsite: null,
        roles: null,
        minBasePay: null
    });

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
        dispatch(applyFilters({ ...filters, [key]: value }));
    };
    return (
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"start"} columnGap={"40px"} marginBottom={"50px"}>
            <Select
                options={options}
                isMulti
                placeholder="Min Experience"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let minArr = selectedOption.map(e => e.value)
                    minArr.sort((a, b) => a - b)
                    handleFilterChange('minExperience', minArr[0])
                }}
            />
            <Select
                options={companyNames.map(name => ({ value: name, label: name }))}
                isMulti
                placeholder="Company Name"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let jobs = selectedOption.map(e => e.value)
                    handleFilterChange('companyNames', jobs)
                }}

            />
            <Select
                options={locations}
                isMulti
                placeholder="Location"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let loc = selectedOption.map(e => e.value)
                    handleFilterChange('locations', loc)
                }}

            />
            <Select
                options={[{ value: 'remote', label: 'Remote' }, { value: 'onsite', label: 'Onsite' }]}
                placeholder="Remote/On-site"
                menuPortalTarget={document.body}
                isMulti
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let rem = selectedOption.map(e => e.value)
                    handleFilterChange('remoteOnsite', rem)
                }}
            />
            <Select
                options={roles}
                isMulti
                placeholder="Role"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let roles = selectedOption.map(e => e.value)
                    console.log("roles: ", roles);
                    handleFilterChange('roles', roles)
                }}
            />
            <Select
                options={salaries}
                isMulti
                placeholder="Min Base Pay"
                menuPortalTarget={document.body}
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                onChange={(selectedOption) => {
                    let minArr = selectedOption.map(e => e.value)
                    minArr.sort((a, b) => a - b)
                    handleFilterChange('minBasePay', minArr[0])
                }}
            // onChange={(selectedOption) => handleFilterChange('minBasePay', selectedOption)}

            />
        </Box>
    );
};

export default Filter;
